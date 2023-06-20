const db = require("../models")
const { v4: uuidv4 } = require("uuid")

const Medicine = db.medicine

const createMedicine = async (req, res, next) => {
  const { nama, stok, harga, deskripsi } = req.body

  const medicineId = uuidv4()

  const medicine = await Medicine.create({
    medicineId: medicineId,
    nama: nama,
    stok: stok,
    harga: harga,
    deskripsi: deskripsi,
  })

  if (!medicine) {
    const error = new Error("Create medicine failed")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Create medicine success",
    data: {
      medicine: medicine,
    },
  }

  console.log(JSON.stringify(response))
  res.status(201).json(response)
}

const getAllMedicines = async (req, res, next) => {
  const medicines = await Medicine.findAll({
    order: [["nomor", "ASC"]],
  })

  if (!medicines) {
    const error = new Error("Get all medicine failed")
    error.status = 400
    return next(error)
  }

  const total_medicines = medicines.length

  const response = {
    status: "success",
    message: "Get all medicine success",
    data: {
      total_medicines: total_medicines,
      medicines: medicines,
    },
  }

  console.log(JSON.stringify(response));
  res.status(200).json(response)
}

const getMedicineById = async (req, res, next) => {
  const { id: medicineId } = req.params

  const medicine = await Medicine.findOne({
    where: {
      medicineId: medicineId,
    },
  })

  if (!medicine) {
    const error = new Error("Get medicine by id failed or medicine not found")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Get medicine by id success",
    data: {
      medicineId: medicineId,
      medicine: medicine,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const updateMedicineById = async (req, res, next) => {
  const { id: medicineId } = req.params;

  const { nama, stok, harga, deskripsi } = req.body

  const medicine = await Medicine.update({
    nama: nama,
    stok: stok,
    harga: harga,
    deskripsi: deskripsi,
  },{
    where: {
      medicineId: medicineId,
    },
  })

  if (!medicine || medicine == 0) {
    const error = new Error("Update medicine by id failed or medicine not found")
    error.status = 400
    return next(error)
  }

  const medicineUpdated = await Medicine.findOne({
    where: {
      medicineId: medicineId,
    },
  })

  const response = {
    status: "success",
    message: "Update medicine by id success",
    data: {
      medicine: medicineUpdated,
    },
  };

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

const deleteMedicineById = async (req, res, next) => {
  const { id: medicineId } = req.params

  const medicine = await Medicine.destroy({
    where: {
      medicineId: medicineId,
    },
  })

  if (!medicine) {
    const error = new Error("Delete medicine by id failed or medicine not found")
    error.status = 400
    return next(error)
  }

  const response = {
    status: "success",
    message: "Delete medicine by id success",
    data: {
      delete: medicine,
    },
  }

  console.log(JSON.stringify(response))
  res.status(200).json(response)
}

module.exports = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicineById,
  deleteMedicineById,
}