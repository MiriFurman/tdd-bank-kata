/**
 * Created by mirif on 31/07/2017.
 */

export function normalizeDate(date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
}