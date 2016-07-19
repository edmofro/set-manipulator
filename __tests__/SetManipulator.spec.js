jest.unmock('../SetManipulator');
import SetManipulator from '../SetManipulator';

describe('SetManipulator', () => {
  it('correctly produces the complement of two different arrays', () => {
    const manipulator = new SetManipulator();
    const a = ['a', 'b', 'c'];
    const b = ['d', 'e', 'f'];
    expect(manipulator.complement(a, b)).toEqual(['a', 'b', 'c']);
    expect(manipulator.complement(b, a)).toEqual(['d', 'e', 'f']);
  });

  it('correctly produces the complement of two identical arrays', () => {
    const manipulator = new SetManipulator();
    const a = ['a', 'b', 'c'];
    const b = ['a', 'b', 'c'];
    expect(manipulator.complement(a, b)).toEqual([]);
    expect(manipulator.complement(b, a)).toEqual([]);
  });

  it('correctly produces the complement of two similar arrays', () => {
    const manipulator = new SetManipulator();
    const a = ['a', 'b', 'c'];
    const b = ['b', 'e', 'c', 'd'];
    expect(manipulator.complement(a, b)).toEqual(['a']);
    expect(manipulator.complement(b, a)).toEqual(['e', 'd']);
  });

  it('correctly produces the union of two different arrays', () => {
    const manipulator = new SetManipulator();
    const a = ['a', 'b', 'c'];
    const b = ['d', 'e', 'f'];
    expect(manipulator.union(a, b)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    expect(manipulator.union(b, a)).toEqual(['d', 'e', 'f', 'a', 'b', 'c']);
  });
});
