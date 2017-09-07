import { Haiku } from './../js/haiku.js';

describe("Haiku", function() {

  it('should test the word run for a single syllable', function() {
    let haiku = new Haiku("run", "far", "away");

    expect(haiku.countSyllables(haiku.lineOne)).toEqual(1);
    expect(haiku.countSyllables(haiku.lineTwo)).toEqual(1);
    expect(haiku.countSyllables(haiku.lineThree)).toEqual(2);
  });
});
