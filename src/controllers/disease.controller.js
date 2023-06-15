const db = require('../models')
const { v4: uuidv4 } = require('uuid')

const { Op } = require("sequelize");

const Disease = db.disease
const Medicine = db.medicine

const createDisease = async (req, res, next) => {
  const { nomor, nama, treatments, keluhan } = req.body

  const diseaseId = uuidv4();

  const disease = await Disease.create({
    diseaseId: diseaseId,
    nomor: nomor,
    nama: nama,
    treatments: treatments,
    keluhan: keluhan,
  });

  if(!disease) {
    const error = new Error('Create disease failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Create disease success",
    data: {
      disease: disease,
    },
  };

  res.status(201).json(response)
}

const getAllDisease = async (req, res, next) => {
  const disease = await Disease.findAll()

  if (!disease) {
    const error = new Error('Get all disease failed')
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Get all disease success",
    data: {
      disease: disease,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const getDiseaseById = async (req, res, next) => {
  const { id: diseaseId } = req.params

  const disease = await Disease.findOne({
    where: {
      diseaseId: diseaseId,
    },
  })

  if (!disease) {
    const error = new Error("Get disease by id failed");
    error.status = 400;
    return next(error);
  }

  const response = {
    status: "success",
    message: "Get disease by id success",
    data: {
      disease: disease,
    },
  };

  console.log(JSON.stringify(response));
  res.status(200).json(response);
}

const updateDiseaseById = async (req, res, next) => {
  const { id: diseaseId } = req.params
  
  const { nama, treatments, keluhan } = req.body 

  const disease = await Disease.update({
    nama: nama,
    treatments: treatments,
    keluhan: keluhan
  }, {
    where: {
      diseaseId: diseaseId
    }
  })

  if (!disease) {
    const error = new Error("Update disease failed or disease not found");
    error.status = 400;
    return next(error);
  }

  const diseaseUpdated = await Disease.findOne({
    where: {
      diseaseId: diseaseId,
    },
  });

  const response = {
    status: "success",
    message: "Update disease success",
    data: {
      disease: diseaseUpdated,
    },
  };

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const deleteDiseaseById = async (req, res, next) => {
  const { id: diseaseId } = req.params

  const disease = await Disease.destroy({
    where: {
      diseaseId: diseaseId,
    }
  })

  if (disease) {
    const error = new Error("Delete disease failed or disease not found");
    error.status = 400;
    return next(error);
  }

  const response = {
    status: 'success',
    message: 'Delete doctor success',
    data: {
      delete: disease
    }
  }

  console.log(response)
  res.status(200).json(response)
}

module.exports = {
  createDisease,
  getAllDisease,
  getDiseaseById,
  updateDiseaseById,
  deleteDiseaseById
}