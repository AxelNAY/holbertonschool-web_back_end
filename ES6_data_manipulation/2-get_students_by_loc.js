function getStudentsByLocation(listeEtudiants, ville) {
  return listeEtudiants.filter((etudiant) => etudiant.location === ville);
}

export default getStudentsByLocation;
