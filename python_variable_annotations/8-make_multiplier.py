#!/usr/bin/env python3
'''Write a type-annotated function make_multiplier that takes
a float multiplieras argument and returns a function
that multiplies a float by multiplier.'''
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''Returns a function that multiplies a float by multiplier.'''
    def result(x: float) -> float:
        '''Return a float multiplies by multiplier.'''
        return x * multiplier
    return result