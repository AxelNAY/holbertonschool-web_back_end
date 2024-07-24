function updateStudentGradeByCity(listeEtudiants, ville, nouvellesNotes) {
return listeEtudiants
.filter((etudiant) => etudiant.location === ville)
.map((etudiant) => {
const noteTrouvee = nouvellesNotes.find(
(note) => note.studentId === etudiant.id,
);
return {
...etudiant,
grade: noteTrouvee ? noteTrouvee.grade : 'N/A',
};
});
}

export default updateStudentGradeByCity;