from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError

from model_mommy import mommy


class AccountsTestCase(TestCase):
    def setUp(self):
        self.model = get_user_model()

    def test_dont_create_user_with_same_email(self):
        mommy.make(self.model, email="example@example.com")
        with self.assertRaises(IntegrityError):
            mommy.make(self.model, email="example@example.com")
