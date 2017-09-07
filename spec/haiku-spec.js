import { Haiku } from './../js/haiku.js';

describe("Haiku", function() {

  let validHaiku;

  beforeEach(function() {
    validHaiku = new Haiku("any one liner", "shall suffice for a haiku", "for today's lesson");
  });

  it('should test the word run for a single syllable', function() {
    let haiku = new Haiku("run", "far", "away");

    expect(haiku.countSyllables(haiku.lineOne)).toEqual(1);
    expect(haiku.countSyllables(haiku.lineTwo)).toEqual(1);
    expect(haiku.countSyllables(haiku.lineThree)).toEqual(2);
  });

  it('should test the number of vowels in a word', function() {
    expect(validHaiku.countVowelsInWord("any")).toEqual(1);
  })

  it('should test if a haiku is a haiku 5/7/5 syllables', function() {

    expect(validHaiku.isHaiku()).toEqual(true);
  })

  it('should test if characters are vowels',function() {
    expect(validHaiku.isVowel('o')).toEqual(true);
    expect(validHaiku.isVowel('y')).toEqual(false);
    expect(validHaiku.isVowel('e')).toEqual(true);
  });

  it('should test if a y is a syllable or not', function() {
    expect(validHaiku.containsYSyllable("happyland")).toEqual(1);
  })

});
