const createWordCountHash = (data) => {
  var freqMap = {};
  const arrayOfData =  data
  arrayOfData.forEach((review) => {
    var words = review.replace(/[.]/g, '').split(/\s/);
    words.forEach(function(word) {
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
  })
  return freqMap;
}

export default createWordCountHash;
