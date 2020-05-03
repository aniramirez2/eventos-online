from accounts.models import User, UserInterests
from matching.models import Match
from collections import defaultdict


class Matching():
    def match_users(self, event):
        matches = defaultdict(int)
        users = User.objects.all()

        for user in users:
            possibilities = UserInterests.objects.filter(interest__in=user.interests,
                                                         level=1)


          #  possibilities = User.objects.filter(                interests__interest__in=user.interests, )

            #    possibilities = UserInterests.objects.filter(interest__in=user.interests,
            #                                              level=1)

            #     possibility = 0
            #     possibilities_count = possibilities.count()

            #     while matches[user.id] < 5 and possibility < possibilities_count:
            #         possibility

            #     for possibility in possibilities:
            #         Match.objects.create(right_user=user,
            #                              left_user=possibility,
            #                              event=event)
