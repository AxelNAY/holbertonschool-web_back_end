const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  
  describe('SUM operation', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    
    it('should return 4 when adding 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    
    it('should round both numbers before adding', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    
    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
    
    it('should handle mixed positive and negative', () => {
      expect(calculateNumber('SUM', -1.5, 2.4)).to.equal(1);
    });
  });
  
  describe('SUBTRACT operation', () => {
    it('should return -4 when subtracting 4.5 from 1.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    
    it('should return -2 when subtracting 3 from 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    
    it('should round both numbers before subtracting', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    
    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
    
    it('should handle mixed positive and negative', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 2.4)).to.equal(-3);
    });
    
    it('should return 0 when subtracting equal numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });
  });
  
  describe('DIVIDE operation', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    
    it('should return 2 when dividing 6 by 3', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
    
    it('should round both numbers before dividing', () => {
      expect(calculateNumber('DIVIDE', 8.7, 2.2)).to.equal(4.5);
    });
    
    it('should handle negative numbers', () => {
      expect(calculateNumber('DIVIDE', -8.4, 2.5)).to.equal(-2.6666666666666665);
    });
    
    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    
    it('should return Error when dividing by 0.4 (rounds to 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
    
    it('should return Error when dividing by -0.4 (rounds to 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, -0.4)).to.equal('Error');
    });
    
    it('should handle decimal results', () => {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    });
  });
  
  describe('Edge cases', () => {
    it('should handle zero as first argument', () => {
      expect(calculateNumber('SUM', 0, 5)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 0, 5)).to.equal(-5);
      expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
    });
    
    it('should handle very small numbers that round to 0', () => {
      expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
    });
    
    it('should handle large numbers', () => {
      expect(calculateNumber('SUM', 999.6, 1000.4)).to.equal(2000);
    });
  });
  
});
