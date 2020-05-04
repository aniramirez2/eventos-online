from collections import defaultdict
from datetime import datetime, timedelta

from django.db.models import Q, F, Count, FloatField
from django.db.models.functions import Cast

from accounts.models import User
from matching.models import Match, MatchRecommentation
from events.models import Event

from matching.constants import MAX_MACTHES


class MatchingService():
    def __init__(self):
        self.event = Event.objects.get(pk=1)

    # Calculate common interests
    def match_common_interests(self, event=None):
        if not event:
            event = self.event

        users = User.objects.all()
        for user in users:
            possibilities = self.match_possibilities(user)

            if possibilities:
                interests = user.interests.values('interest')
                interests = Q(interests__interest__in=interests)
                interests = Count('interests__interest',
                                  filter=interests,
                                  output_field=FloatField())
                interests = Cast(interests/3.0, output_field=FloatField())

                possibilities = possibilities.annotate(match_score=interests)

                for poss in possibilities:
                    MatchRecommentation.objects.create(event=event,
                                                       user=user,
                                                       match=poss,
                                                       score=poss.match_score)

    def match_possibilities(self, user):
        filtering = Q(user=user) | Q(match=user)
        filtering = MatchRecommentation.objects.filter(filtering)

        users = Q(pk__in=filtering.values('user_id'))
        users = users | Q(pk__in=filtering.values('match_id'))
        users = users | Q(pk=user.id)
        users = User.objects.exclude(users)

        return users

    # TODO: 2. pick desired connections, max 3 -> record if reacheaded max
    # TODO: 3. make loose schedule
    # TODO: 4. send schedule emails
