const PatientModel = (sequelize, Sequelize) => {
  const Patient = sequelize.define('patients', {
    patiendId: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    NRM: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.ENUM('L', 'P'),
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
    JaminanKesehatan: {
      type: Sequelize.ENUM('BPJS', 'Umum', 'Lainnya'),
    },
    noBPJS: {
      type: Sequelize.STRING,
    },
    alergi: {
      type: Sequelize.JSON,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
    namaPenanggungJawab: {
      type: Sequelize.STRING,
    },
    telephonePenanggungJawab: {
      type: Sequelize.STRING,
    },
    hubunganPenanggungJawab: {
      type: Sequelize.STRING,
    }
  })

  return Patient
}

module.exports = PatientModel