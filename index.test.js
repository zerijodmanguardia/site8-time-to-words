const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  // start
  it("2:00 > two o'clock", () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });
  it('2:03 > three past two', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('2:11 > eleven past two', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });
  it('2:11 > quarter past two', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });
  it('2:16 > sixteen past two', () => {
    const timeInWords = convertTimeToWords('2:16');
    expect(timeInWords).toBe('sixteen past two');
  });
  it('2:20 > twenty past two', () => {
    const timeInWords = convertTimeToWords('2:20');
    expect(timeInWords).toBe('twenty past two');
  });
  it('2:30 > half past two', () => {
    const timeInWords = convertTimeToWords('2:30');
    expect(timeInWords).toBe('half past two');
  });
  it('2:33 > twenty seven to three', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });
  it('2:40 > twenty to three', () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe('twenty to three');
  });
  it('2:55 > five to three', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });
});
