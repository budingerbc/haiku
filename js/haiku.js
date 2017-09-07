export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }

  countVowelsInWord(word) {
    let vowelCount = 0;
    let characters = word.split('');
    let givenVowels = ['a', 'e', 'i', 'o', 'u'];

    characters.forEach(function(character) {
      for(let i = 0; i < givenVowels.length; i++) {
        if(givenVowels[i] === character) {
          vowelCount++;
        }
      }
    });
    return vowelCount;
  }

  isVowel(char) {
    let givenVowels = ['a', 'e', 'i', 'o', 'u'];
    givenVowels.forEach(function(vowel) {
      if(char === vowel) {
        return true;
      }
    });
    return false;
  }

  countSilentEs(word) {
    if (word[word.length - 1] == "e" && word[word.length - 2] != 'l') {
      return 1;
    }

    return 0;
  }

  countDuplicateVowels(word) {

    let duplicates = 0;

    for(let i = 0; i < word.length - 2; i++) {
      if(this.isVowel(word[i])) {
        if(this.isVowel(word[i+1])) {
          duplicates++;
        }
      }
    }
    return duplicates;
  }

  countSyllables(word) {
    wordArry = word.split("");

    let syllables = this.countVowelsInWord(wordArry);

    syllables -= this.countSilentEs(wordArry);
    syllables -= this.countDuplicateVowels(wordArry);

    return syllables;
  }

  countLineSyllables(line) {
    let wordsInLine = line.split(" ");
    let syllableCount = 0;

    for (let i = 0; i < wordsInLine.length; i++) {
      let syllablesInWord = this.countSyllables(wordsInLine[i]);
      syllableCount += syllablesInWord;
    }

    return syllableCount;
  }

  isHaiku()
  {
    let lineOneSyllables = this.countLineSyllables(this.lineOne);
    let lineTwoSyllables = this.countLineSyllables(this.lineTwo);
    let lineThreeSyllables = this.countLineSyllables(this.lineThree);

    if (lineOneSyllables == 5 && lineTwoSyllables == 7 && lineThreeSyllables == 5) {
      return true;
    }
    else {
      return false;
    }
  }
}

// Goal: To find the number of syllables

//

// Count vowels in word.


// Subtract silent vowels.

// Subtract one vowel for diphthong.

// Identify diphthong.  oi, oy, ou, ow, au, aw, oo, ew,
