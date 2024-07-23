export default function appendToEachArrayValue(array, appendString) {
  const NewArray = []

  for (const idx of array) {
    NewArray.push(appendString + idx)
  }

  return NewArray;
}