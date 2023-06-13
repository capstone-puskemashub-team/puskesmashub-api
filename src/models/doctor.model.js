const DoctorModel = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctors", {
    doctorId: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    NIK: {
      type: Sequelize.STRING,
      unique: true,
    },
    jenisKelamin: {
      type: Sequelize.ENUM("L", "P"),
    },
    umur: {
      type: Sequelize.INTEGER,
    },
    tempatLahir: {
      type: Sequelize.STRING,
    },
    tanggalLahir: {
      type: Sequelize.DATE,
    },
    telephone: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
    jadwalKerja: {
      type: Sequelize.JSON,
    },
  });

  return Doctor
}

module.exports = DoctorModel