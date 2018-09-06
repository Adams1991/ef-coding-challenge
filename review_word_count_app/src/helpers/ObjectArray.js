const createObjectArray = (keyArray, valueArray) => {

  const objectArray = keyArray.map((word, index) => {
    let wordCount = valueArray[index]
    return {text:word, value: wordCount}
  });

  return objectArray
}

export default createObjectArray;
