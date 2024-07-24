function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [...set]
    .filter(
      (value) => typeof value === 'string' && value.startsWith(startString),
    )
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}

export default cleanSet;