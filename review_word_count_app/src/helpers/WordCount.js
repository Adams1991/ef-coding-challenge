const createWordCountHash = (data) => {
  var freqMap = {};
  const arrayOfData =  data
  arrayOfData.forEach((review) => {
    var words = review.replace(/[-+().,!]/g, '').split(/\s/);
    var wordsOverTwoChar = [];

    words.forEach((word) => {
      if (word.length > 3){
      wordsOverTwoChar.push(word.toLowerCase())
    }
    });

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
