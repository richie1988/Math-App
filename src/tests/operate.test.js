import operate from '../logic/operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('4', '2', 'x');
    expect(result).toBe('8');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('should handle division by zero gracefully', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    const result = operate('7', '4', '%');
    expect(result).toBe('3');
  });

  it('should handle modulo with divisor as zero gracefully', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('2', '3', '^')).toThrowError("Unknown operation '^'");
  });
});
