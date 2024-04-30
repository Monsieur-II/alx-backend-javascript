export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) return [];

  return array.reduce((x, y) => x + y);
}
