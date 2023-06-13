const MedicineModel = (sequelize, Sequelize) => {
  const Medicine = sequelize.define("medicines", {
    medicineId: {
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
    stok: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    harga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.TEXT,
    },
  });

  return Medicine
}

module.exports = MedicineModel