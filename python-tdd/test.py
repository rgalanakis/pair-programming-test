from unittest import TestCase
from mycode import myfunc


class Tests(TestCase):
    def test_multiplies(self):
        self.assertEqual(myfunc(2), 4)
