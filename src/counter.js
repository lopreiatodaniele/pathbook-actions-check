export function nextCount(count, delta, limit = 3) {
  if (!Number.isInteger(limit) || limit < 0) {
    throw new RangeError("limit must be a non-negative integer");
  }
  if (!Number.isInteger(count) || count < 0 || count > limit) {
    throw new RangeError("count must be an integer within the limit");
  }
  if (delta !== 1 && delta !== -1) {
    throw new RangeError("delta must be 1 or -1");
  }
  return Math.max(0, count + delta);
}
