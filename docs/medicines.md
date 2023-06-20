## Medicines

### Create Medicine

**Request**

```http
POST /api/v0/medicines
```

**Request Body**
```JSON
{
    "nama": "Paracetamol",
    "stok": "100",
    "harga": 10000,
    "deskripsi": "Obat panas dan pusing"
}
```

**Response**

```JSON
{
    "status": "success",
    "message": "Create medicine success",
    "data": {
        "medicine": {
            "medicineId": "1b4e49d9-635b-4562-b0da-099bd851c27d",
            "nomor": 1,
            "nama": "Paracetamol",
            "stok": 100,
            "harga": 10000,
            "deskripsi": "Obat sakit kepala",
            "updatedAt": "2023-06-19T12:02:58.399Z",
            "createdAt": "2023-06-19T12:02:58.399Z"
        }
    }
}
```

### Get all medicines

**Request**

```http
GET /api/v0/medicines
```

**Response**

```JSON
{
    "status": "success",
    "message": "Get all medicine success",
    "data": {
        "total_medicines": 2,
        "medicines": [
            {
                "medicineId": "4bc217aa-238c-4007-8fdd-56e48387aaff",
                "nomor": 1,
                "nama": "Paracetamol",
                "stok": 100,
                "harga": 10000,
                "deskripsi": "Obat panas dan pusing",
                "createdAt": "2023-06-20T12:26:51.000Z",
                "updatedAt": "2023-06-20T12:26:51.000Z"
            },
            {
                "medicineId": "21e6a29b-536b-485c-9884-bbf88b93ce27",
                "nomor": 2,
                "nama": "Komik",
                "stok": 100,
                "harga": 2000,
                "deskripsi": "Obat batuk",
                "createdAt": "2023-06-20T12:27:52.000Z",
                "updatedAt": "2023-06-20T12:27:52.000Z"
            }
        ]
    }
}
```

### Get medicine by id

**Request**

```http
GET /api/v0/medicines/:id
```

**Example**

```http
GET /api/v0/medicines/1b4e49d9-635b-4562-b0da-099bd851c27d
```

**Response**

```JSON
{
    "status": "success",
    "message": "Get medicine by id success",
    "data": {
        "medicine": {
            "medicineId": "1b4e49d9-635b-4562-b0da-099bd851c27d",
            "nomor": 1,
            "nama": "Paracetamol",
            "stok": 100,
            "harga": 10000,
            "deskripsi": "Obat sakit kepala",
            "createdAt": "2023-06-19T12:02:58.000Z",
            "updatedAt": "2023-06-19T12:02:58.000Z"
        }
    }
}
```

### Update medicine by id

**Request**

```http
PUT /api/v0/medicines/:id
```

**Example**

```http
PUT /api/v0/medicines/1b4e49d9-635b-4562-b0da-099bd851c27d
```

**Request Body**

```JSON
{
    "nama": "Paracetamol",
    "stok": 70,
    "harga": 10000,
    "deskripsi": "Obat sakit kepala"
}
```

**Response**

```JSON
{
    "status": "success",
    "message": "Update medicine by id success",
    "data": {
        "medicine": {
            "medicineId": "1b4e49d9-635b-4562-b0da-099bd851c27d",
            "nomor": 1,
            "nama": "Paracetamol",
            "stok": 70,
            "harga": 10000,
            "deskripsi": "Obat sakit kepala",
            "createdAt": "2023-06-19T12:02:58.000Z",
            "updatedAt": "2023-06-19T12:08:31.000Z"
        }
    }
}
```

### Delete medicine by id

**Request**

```http
DELETE /api/v0/medicines/:id
```

**Example**

```http
DELETE /api/v0/medicines/1b4e49d9-635b-4562-b0da-099bd851c27d
```

```JSON
{
    "id": "1b4e49d9-635b-4562-b0da-099bd851c27d"
}
```

**Response**

```JSON
{
    "status": "success",
    "message": "Delete medicine by id success",
    "data": {
        "delete": 1
    }
}
```