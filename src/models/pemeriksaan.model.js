const PemeriksaanModel = (sequelize, Sequelize) => {
  const Pemeriksaan = sequelize.define("pemeriksaans", {
    pemeriksaanId: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    NRM: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tanggalPemeriksaan: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    keluhan: {
      type: Sequelize.JSON,
    },
    suhuTubuh: {
      type: Sequelize.FLOAT,
    },
    beratBadan: {
      type: Sequelize.FLOAT,
    },
    beratLahir: {
      type: Sequelize.FLOAT,
    },
    tinggiBadan: {
      type: Sequelize.FLOAT,
    },
    panjangLaahir: {
      type: Sequelize.FLOAT,
    },
    tekananDarah: {
      type: Sequelize.STRING,
    },
    nadi: {
      type: Sequelize.INTEGER,
    },
  });

  return Pemeriksaan;
}

module.exports = PemeriksaanModel