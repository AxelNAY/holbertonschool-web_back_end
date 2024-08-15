#!/usr/bin/env python3
'''Import wait_random from the previous python file that you’ve written and
write an async routine called wait_n that takes in 2 int arguments
(in this order): n and max_delay. You will spawn wait_random
n times with the specified max_delay.'''
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    delay = [wait_random(max_delay) for i in range(0, n)]
    delay_list = await asyncio.gather(*delay)
    async_list = []
    for i in range(0, len(delay_list)):
        async_list.append(min(delay_list))
        delay_list.remove(min(delay_list))
    return async_list