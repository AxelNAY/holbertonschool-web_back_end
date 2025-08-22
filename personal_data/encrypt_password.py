#!/usr/bin/env python3
""" encrypt_password """

import bcrypt


def hash_password(password: str) -> bytes:
    """
        Function that expects one string argument name password
        and returns a salted, hashed password, which is a byte string.
    """
    byPassword = password.encode('utf-8')
    salt: bytes = bcrypt.gensalt()
    hashed_password: bytes = bcrypt.hashpw(byPassword, salt)
    return hashed_password


def is_valid(hashed_password: bytes, password: str) -> bool:
    """
        Function that validate that the provided password
        matches the hashed password.
    """
    byPassword = password.encode('utf-8')
    result = bcrypt.checkpw(byPassword, hashed_password)
    return result
