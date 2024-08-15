#!/usr/bin/env python3
'''Write an asynchronous coroutine that take the code from wait_n and alter it
into a new function task_wait_n. The code is nearly identical to wait_n except
task_wait_random is being called.
'''
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    '''Write an asynchronous coroutine that take the code from wait_n
    and alter it into a new function task_wait_n.'''
    delay = [task_wait_random(max_delay) for i in range(0, n)]
    delay_list = await asyncio.gather(*delay)
    async_list = []
    for i in range(0, len(delay_list)):
        async_list.append(min(delay_list))
        delay_list.remove(min(delay_list))
    return async_list
