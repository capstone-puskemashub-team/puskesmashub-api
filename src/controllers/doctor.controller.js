const db = require("../models")
const { v4: uuidv4 } = require('uuid')

const Doctor = db.doctor

const createDoctor = async (req, res, next) => {
  const { nama, NIK, jenisKelamin, umur, tempatLahir, tanggalLahir, telephone, alamat, jadwalKerja } = req.body

  const doctorId = uuidv4()

  const doctor = await Doctor.create({
    doctorId: doctorId,
    nama: nama,
    NIK: NIK,
    jenisKelamin: jenisKelamin,
    umur: umur,
    tempatLahir: tempatLahir,
    tanggalLahir: new Date(tanggalLahir),
    telephone: telephone,
    alamat: alamat,
    jadwalKerja: jadwalKerja,
  });

  if (!doctor) {
    const error = new Error("Create doctor failed")
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Create doctor success',
    data: {
      doctor: doctor
    }
  }

  console.log(JSON.stringify(response))
  res.status(201).json(response)
}

const getAllDoctors = async (req, res, next) => {
  const doctors = await Doctor.findAll()

  if(!doctors) {
    const error = new Error('Get all doctor failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Get all doctor success',
    data: {
      doctors: doctors
    }
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const getDoctorById = async (req, res, next) => {
  const doctorId = req.params.id

  const doctor = await Doctor.findOne({
    where: {
      doctorId: doctorId
    }
  })

  if(!doctor) {
    const error = new Error('Get doctor by id failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Get doctor by id success',
    data: {
      doctor: doctor
    }
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const updateDoctorById = async (req, res, next) => {
  const doctorId = req.params.id

  const { nama, NIK, jenisKelamin, umur, tempatLahir, tanggalLahir, telephone, alamat, jadwalKerja } = req.body

  const doctor = await Doctor.update({
    nama: nama,
    NIK: NIK,
    jenisKelamin: jenisKelamin,
    umur: umur,
    tempatLahir: tempatLahir,
    tanggalLahir: new Date(tanggalLahir),
    telephone: telephone,
    alamat: alamat,
    jadwalKerja: jadwalKerja
  }, {
    where: {
      doctorId: doctorId
    }
  })

  if(!doctor) {
    const error = new Error('Update doctor failed or doctor not found')
    error.status = 400
    return next(error)
  }

  const doctorUpdated = await Doctor.findOne({
    where: {
      doctorId: doctorId
    }
  })

  const response = {
    status: 'success',
    message: 'Update doctor success',
    data: {
      doctor: doctorUpdated
    }
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const deleteDoctorById = async (req, res, next) => {
  const doctorId = req.params.id

  const doctor = await Doctor.destroy({
    where: {
      doctorId: doctorId
    }
  })

  if(!doctor) {
    const error = new Error('Delete doctor failed or doctor not found')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Delete doctor success',
  }

  console.log(response)
  res.status(200).json(response)
}

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
};