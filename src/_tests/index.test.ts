import { invariant } from '../index';

test('throws on error', () => {
  try {
    invariant(false, 'Test');
  } catch (e) {
    expect(e).toEqual(new Error('HEY, LISTEN! Test'));
  }
});

test('ignores true statement', () => {
  try {
    invariant(false, 'Test');
    expect(true).toBe(true);
  } catch (e) {}
});
