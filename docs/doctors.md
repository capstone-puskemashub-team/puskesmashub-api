## Doctors

### Create Doctor

**Request**

```http
POST /api/v0/doctors
```

**Body**
```json
{
  "nama": "Abdul Gani",
  "NIK": "33234234234324",
  "jenisKelamin": "L",
  "umur": 35,
  "tempatLahir": "Banyumas",
  "tanggalLahir": "1990-03-25",
  "telephone": "088888888888",
  "alamat": "Sleman",
  "jadwalKerja": [
      "selasa",
      "rabu",
      "kamis",
      "jumat"
  ]
}
```

**Response**
```json
{
    "status": "success",
    "message": "Create doctor success",
    "data": {
        "doctor": {
            "doctorId": "bef26316-a7cd-4f84-989a-74150656a177",
            "nama": "Abdul Gani",
            "NIK": "33234234234324",
            "jenisKelamin": "L",
            "umur": 35,
            "tempatLahir": "Banyumas",
            "tanggalLahir": "1990-03-25T00:00:00.000Z",
            "telephone": "088888888888",
            "alamat": "Sleman",
            "jadwalKerja": [
                "selasa",
                "rabu",
                "kamis",
                "jumat"
            ]
        }
    }
}
```

### Get All Doctors

**Request**

```http
GET /api/v0/doctors
```

**Response**

```JSON
{
    "status": "success",
    "message": "Get all doctor success",
    "data": {
        "doctors": [
            {
                "doctorId": "512038f5-08eb-4088-9569-2866b0e5afd3",
                "nama": "Abdul Gani",
                "NIK": "33234234234324",
                "jenisKelamin": "L",
                "umur": 35,
                "tempatLahir": "Banyumas",
                "tanggalLahir": "1990-03-25T00:00:00.000Z",
                "telephone": "088888888888",
                "alamat": "Sleman",
                "jadwalKerja": [
                    "selasa",
                    "rabu",
                    "kamis",
                    "jumat"
                ],
                "createdAt": "2023-06-16T10:34:19.000Z",
                "updatedAt": "2023-06-16T10:34:19.000Z"
            }
        ]
    }
}
```

### Get Doctor By Id

**Request**

```http
GET /api/v0/doctors/:id
```

**Response**

### Update Doctor

**Request**

```http
PUT /api/v0/doctors/:id
```

