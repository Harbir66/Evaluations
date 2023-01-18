const {getScore,getBestScore} = require('./bowlingGameScoreTracker');

describe('Bowling Game',()=>{
  describe('Bowling Game Score Tracker',()=>{
    it('should throw an error when input is not an array',()=>{
      expect(()=>getScore('abc')).toThrow('Input should be an array');
    });
    it('should throw an error when input array size is not 10',()=>{
      expect(()=>getScore('abc')).toThrow('Size of input array should be 10');
    });
    it('should thorw an error when input is not an array of numbers',()=>{
      expect(()=>getScore([1,2,'abc',4,5,6,7,8,9,10])).toThrow('Input array should only have numbers only');
    });
    it('should do return 90 when input is [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]',()=>{
      const score=getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
      expect(score).toBe(90);
    });
    it('should do return 30 when input is [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]',()=>{
      const score=getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
      expect(score).toBe(30);
    });
    it('should do return 16 when input is [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]',()=>{
      const score=getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(score).toBe(16);
    });
  });
});