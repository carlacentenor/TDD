const isVowel = function (char) {
    const vowels = ['a', 'e', 'i', 'o', 'u','á','é','í','ó','ú'];
  
    for (let i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) {
        return true;
      }
    }
  
    return false;
  };
  
  const makeVowelsUpperCase = function (string) {
    let result = '';
  
    for (let i = 0; i < string.length; i++) {
      if (isVowel(string[i])) {
        result += string[i].toUpperCase();
      } else {
        result += string[i];
      }
    }
  
    return result;
  };