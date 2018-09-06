const createObjectArray = (keyArray, valueArray) => {

  const objectArray = keyArray.map((word, index) => {
    let wordCount = valueArray[index]
    return {text:word, value: wordCount}
  });

  // sorts object array so higher frequency words rendered at top of table
  return objectArray.sort(function(obj1, obj2) {
	   return obj2.value - obj1.value;
  })
}

export default createObjectArray;
