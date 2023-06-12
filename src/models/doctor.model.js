const { DataTypes } = require("sequelize");

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
      type: Sequelize.ENUM("Laki-laki", "Perempuan"),
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
      type: DataTypes.TEXT,
      get() {
        const value = this.getDataValue("jadwalKerja");
        return value ? value.split(",") : [];
      },
      set(value) {
        this.setDataValue("jadwalKerja", value.join(","));
      },
    },
  });

  return Doctor
}

module.exports = DoctorModel