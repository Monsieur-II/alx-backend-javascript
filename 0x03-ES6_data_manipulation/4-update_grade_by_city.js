export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) return [];

  return array.map((student) => {
    if (student.location === city) {
      const grade = newGrades.filter((grade) => grade.studentId === student.id);
      student.grade = grade.grade || 'N/A';
    }
    return student;
  });
}
