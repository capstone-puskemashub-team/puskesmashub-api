const db = require('../models')
const { v4: uuidv4 } = require('uuid')

const Pemeriksaan = db.pemeriksaan

const createPemeriksaan = async (req, res, next) => {
  const {
    NRM,
    tanggalPemeriksaan,
    keluhan,
    suhuTubuh,
    beratBadan,
    beratLahir,
    tinggiBadan,
    panjangLahir,
    tekananDarah,
    nadi,
  } = req.body

  const pemeriksaanId = uuidv4()

  const pemeriksaan = await Pemeriksaan.create({
    pemeriksaanId: pemeriksaanId,
    NRM: NRM,
    tanggalPemeriksaan: new Date(tanggalPemeriksaan),
    keluhan: keluhan,
    suhuTubuh: suhuTubuh,
    beratBadan: beratBadan,
    beratLahir: beratLahir,
    tinggiBadan: tinggiBadan,
    panjangLahir: panjangLahir,
    tekananDarah: tekananDarah,
    nadi: nadi,
  })

  if (!pemeriksaan) {
    const error = new Error('Create pemeriksaan failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Create pemeriksaan success',
    data: {
      pemeriksaan: pemeriksaan,
    },
  }

  console.log(JSON.stringify(response))
  res.status(201).json(response)
}

const getAllPemeriksaan = async (req, res, next) => {
  const pemeriksaan = await Pemeriksaan.findAll()

  if (!pemeriksaan) {
    const error = new Error('Get all pemeriksaan failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Get all pemeriksaan success',
    data: {
      pemeriksaans: pemeriksaan,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const getPemeriksaanById = async (req, res, next) => {
  const { id: pemeriksaanId } = req.params

  const pemeriksaan = await Pemeriksaan.findOne({
    where: {
      pemeriksaanId: pemeriksaanId,
    },
  })

  if (!pemeriksaan) {
    const error = new Error('Get pemeriksaan by id failed or pemeriksaan not found')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Get pemeriksaan by id success',
    data: {
      pemeriksaan: pemeriksaan,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const updatePemeriksaanById = async (req, res, next) => {
  const { id: pemeriksaanId } = req.params

  const {
    tanggalPemeriksaan,
    keluhan,
    suhuTubuh,
    beratBadan,
    beratLahir,
    tinggiBadan,
    panjangLahir,
    tekananDarah,
    nadi,
  } = req.body

  const pemeriksaan = await Pemeriksaan.update({
    tanggalPemeriksaan: new Date(tanggalPemeriksaan),
    keluhan: keluhan,
    suhuTubuh: suhuTubuh,
    beratBadan: beratBadan,
    beratLahir: beratLahir,
    tinggiBadan: tinggiBadan,
    panjangLahir: panjangLahir,
    tekananDarah: tekananDarah,
    nadi: nadi,
  }, {
    where: {
      pemeriksaanId: pemeriksaanId,
    },
  })

  if (!pemeriksaan) {
    const error = new Error('Update pemeriksaan failed or pemeriksaan not found')
    error.status = 400
    return next(error)
  }

  const pemeriksaanUpdated = await Pemeriksaan.findOne({
    where: {
      pemeriksaanId: pemeriksaanId,
    },
  })

  const response = {
    status: 'success',
    message: 'Update pemeriksaan success',
    data: {
      pemeriksaan: pemeriksaanUpdated,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const deletePemeriksaanById = async (req, res, next) => {
  const { id: pemeriksaanId } = req.params

  const pemeriksaan = await Pemeriksaan.destroy({
    where: {
      pemeriksaanId: pemeriksaanId,
    },
  })

  if (!pemeriksaan) {
    const error = new Error('Delete pemeriksaan failed or pemeriksaan not found')
    error.status = 400
    return next(error)
  }

  const response = {
    status: 'success',
    message: 'Delete pemeriksaan success',
    data: {
      pemeriksaanId: pemeriksaanId,
      delete: pemeriksaan,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

module.exports = {
  createPemeriksaan,
  getAllPemeriksaan,
  getPemeriksaanById,
  updatePemeriksaanById,
  deletePemeriksaanById,
};