// creates generic word count object
const createWordCountHash = (data) => {
  var freqMap = {};
  const arrayOfData =  data
  arrayOfData.forEach((review) => {

    // removes unwanted characters
    var words = review.replace(/[-+().,!]/g, '').split(/\s/);
    var wordsOverTwoChar = [];


    // removes non-essential words to make display more consice for client
    // would be replaced with API with non needed words used as proof of concept
    words.forEach((word) => {
      if (word.length > 3){
      wordsOverTwoChar.push(word.toLowerCase())
    }
    });
    let toRemove = ["it's", "that", "this", "will", "does"]
    wordsOverTwoChar = wordsOverTwoChar.filter( ( word ) => !toRemove.includes( word ) );


    wordsOverTwoChar.forEach(function(word) {
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
  })
  return freqMap;
}

export default createWordCountHash;
