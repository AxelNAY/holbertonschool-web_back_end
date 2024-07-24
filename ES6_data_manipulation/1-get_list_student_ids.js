function getListStudentIds(listeEtudiants) {
  if (!Array.isArray(listeEtudiants)) {
    return [];
  }
  return listeEtudiants.map((etudiant) => etudiant.id);
}

export default getListStudentIds;
