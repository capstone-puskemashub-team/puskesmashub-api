const db = require("../models")
const { v4: uuidv4 } = require("uuid")

const Patient = db.patient

const createPatient = async (req, res, next) => {
  const {
    NRM,
    nama,
    NIK,
    jenisKelamin,
    umur,
    tempatLahir,
    tanggalLahir,
    telephone,
    JaminanKesehatan,
    noBPJS,
    alergi,
    alamat,
    namaPenanggungJawab,
    telephonePenanggungJawab,
    hubunganPenanggungJawab,
  } = req.body

  const patientId = uuidv4()

  const patient = await Patient.create({
    patientId: patientId,
    NRM: NRM,
    nama: nama,
    NIK: NIK,
    jenisKelamin: jenisKelamin,
    umur: umur,
    tempatLahir: tempatLahir,
    tanggalLahir: new Date(tanggalLahir),
    telephone: telephone,
    JaminanKesehatan: JaminanKesehatan,
    noBPJS: noBPJS,
    alergi: alergi,
    alamat: alamat,
    namaPenanggungJawab: namaPenanggungJawab,
    telephonePenanggungJawab: telephonePenanggungJawab,
    hubunganPenanggungJawab: hubunganPenanggungJawab,
  })

  if (!patient) {
    const error = new Error("Create patient failed")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Create patient success",
    data: {
      patient: patient,
    },
  }

  console.log(JSON.stringify(response))
  res.status(201).json(response)
}

const getAllPatients = async (req, res, next) => {
  const patients = await Patient.findAll()

  if (!patients) {
    const error = new Error("Get all patient failed")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Get all patient success",
    data: {
      patients: patients,
    },
  }

  console.log(JSON.stringify(response));
  res.status(200).json(response)
}

const getPatientById = async (req, res, next) => {
  const { id: patientId } = req.params

  const patient = await Patient.findOne({
    where: {
      patientId: patientId,
    },
  })

  if (!patient) {
    const error = new Error("Get patient by id failed or patient not found")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Get patient by id success",
    data: {
      patient: patient,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const updatePatientById = async (req, res, next) => {
  const { id: patientId } = req.params

  const {
    NRM,
    nama,
    NIK,
    jenisKelamin,
    umur,
    tempatLahir,
    tanggalLahir,
    telephone,
    JaminanKesehatan,
    noBPJS,
    alergi,
    alamat,
    namaPenanggungJawab,
    telephonePenanggungJawab,
    hubunganPenanggungJawab,
  } = req.body

  const patient = await Patient.update({
    NRM: NRM,
    nama: nama,
    NIK: NIK,
    jenisKelamin: jenisKelamin,
    umur: umur,
    tempatLahir: tempatLahir,
    tanggalLahir: new Date(tanggalLahir),
    telephone: telephone,
    JaminanKesehatan: JaminanKesehatan,
    noBPJS: noBPJS,
    alergi: alergi,
    alamat: alamat,
    namaPenanggungJawab: namaPenanggungJawab,
    telephonePenanggungJawab: telephonePenanggungJawab,
    hubunganPenanggungJawab: hubunganPenanggungJawab,
  }, {
    where: {
      patientId: patientId,
    },
  })

  if (!patient) {
    const error = new Error("Update patient failed or patient not found")
    error.status = 400
    return next(error)
  }

  const patientUpdated = await Patient.findOne({
    where: {
      patientId: patientId,
    },
  })

  const response = {
    status: "success",
    message: "Update patient success",
    data: {
      patient: patientUpdated,
    },
  };

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const deletePatientById = async (req, res, next) => {
  const { id: patientId } = req.params

  const patient = await Patient.destroy({
    where: {
      patientId: patientId,
    },
  })

  if (!patient) {
    const error = new Error("Delete patient failed or patient not found")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Delete patient success",
    data: {
      delete: patient,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
}
