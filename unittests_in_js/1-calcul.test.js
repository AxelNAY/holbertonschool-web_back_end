const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  
  describe('SUM operation', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    
    it('should return 4 when adding 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    
    it('should round both numbers before adding', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    
    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
    
    it('should handle mixed positive and negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, 2.4), 1);
    });
  });
  
  describe('SUBTRACT operation', () => {
    it('should return -4 when subtracting 4.5 from 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    
    it('should return -2 when subtracting 3 from 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    
    it('should round both numbers before subtracting', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    
    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
    
    it('should handle mixed positive and negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 2.4), -3);
    });
    
    it('should return 0 when subtracting equal numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });
  });
  
  describe('DIVIDE operation', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    
    it('should return 2 when dividing 6 by 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });
    
    it('should round both numbers before dividing', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.7, 2.2), 4.5);
    });
    
    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.4, 2.5), -2.6666666666666665);
    });
    
    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    
    it('should return Error when dividing by 0.4 (rounds to 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
    
    it('should return Error when dividing by -0.4 (rounds to 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0.4), 'Error');
    });
    
    it('should handle decimal results', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });
  });
  
  describe('Edge cases', () => {
    it('should handle zero as first argument', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 5), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 5), -5);
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    });
    
    it('should handle very small numbers that round to 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
    });
    
    it('should handle large numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 999.6, 1000.4), 2000);
    });
  });
  
});
