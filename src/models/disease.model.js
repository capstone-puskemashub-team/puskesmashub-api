const DiseaseModel = (sequelize, Sequelize) => {
  const Disease = sequelize.define("diseases", {
    diseaseId: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nomor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    treatments: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    keluhan: {
      type: Sequelize.JSON,
      allowNull: true,
    },
  });

  return Disease
}

module.exports = DiseaseModel
    