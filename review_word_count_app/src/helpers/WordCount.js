const createWordCountHash = (data) => {
  var freqMap = {};
  const arrayOfData =  data
  arrayOfData.forEach((review) => {
    var words = review.replace(/[-+().,!]/g, '').split(/\s/);
    var wordsOverTwoChar = [];


    // would be replaced with API with non needed words used as proof of concept
    words.forEach((word) => {
      if (word.length > 3){
      wordsOverTwoChar.push(word.toLowerCase())
    }
    });

    // would be replaced with API with non needed words used as proof of concept
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
