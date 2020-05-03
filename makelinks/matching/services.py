from collections import defaultdict
from datetime import datetime

from django.db.models import Q

from accounts.models import User, UserInterests  # , UserEvent
from matching.models import Match


class Matching():
    def match_users(self, event):
        min_matches = User.objects.count() - 1
        users_available = self.users_with_no_matches(event)
        level = 0

        while users_available and level < 5:
            level += 1
            final_match = level > 3

            self.match(level, event, users_available, min_matches, final_match)

    def match(self,  level, event, users, min_matches, final_match=False):
        matches = defaultdict(int)

        for right_user in users:
            right_user_matches = min_matches - \
                self.available_matches_count(event, right_user)

            if final_match:
                possibilities = users
            else:
                possibilities = right_user.interests.values('interest__id')
                possibilities = UserInterests.objects.filter(interest__in=possibilities,
                                                             level=level)

            possibilities = possibilities.exclude(user=right_user)

            while matches[right_user.id] < right_user_matches:
                possibility = 0
                left_user = possibilities[possibility].user
                left_user_matches = min_matches - \
                    self.available_matches_count(event, left_user)

                if matches[left_user.id] < left_user_matches:
                    Match.objects.create(right_user=right_user,
                                         left_user=left_user,
                                         event=event,
                                         date=datetime.now())

                    matches[right_user.id] += 1
                    matches[left_user.id] += 1

    def available_matches_count(self, user, event):
        return Match.objects.filter(Q(right_user=user) | Q(left_user=user), event=event).count()

    def users_with_no_matches(self, event):
        right_users = Match.objects.filter(event=event)
        right_users = right_users.values('right_user__id')

        left_users = Match.objects.filter(event=event)
        left_users = left_users.values('left_user__id')

        return Users.objects.exclude(pk__in=(left_users | right_users))
