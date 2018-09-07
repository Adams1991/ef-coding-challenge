// creates Array with word count objects for iterating
const createObjectArray = (wordCountHash) => {

  let objectArray = [];

  // Creates Object array from generic word count hash
  Object.keys(wordCountHash).forEach((key) => {
    var value = wordCountHash[key]
    objectArray.push({text:key, value: value})
  })

  // sorts object array so higher frequency words rendered at top of table
  return objectArray.sort(function(obj1, obj2) {
	   return obj2.value - obj1.value;
  })
}

export default createObjectArray;
