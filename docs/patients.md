## Patients

### Create patient

**Request**

```http
POST /api/v0/patients
```

**Request Body**
```JSON
{
    "nama":"Ahmad Ali Masykur",
    "NIM":"1111110101010001",
    "jenisKelamin": "L",
    "umur": 21,
    "tempatLahir": "Banyumas",
    "tanggalLahir": "2002-01-27",
    "telephone": "0888888888",
    "JaminanKesehatan": "BPJS",
    "noBPJS": "111100011001",
    "alergi": [
        "kacang",
        "kacang mete" //contoh
    ],
    "alamat": "Yogyakarta, slebelah ugm",
    "namaPenanggungJawa": "seseorang",
    "telephonePenanggungJawab": "0899999999",
    "hubunganPenanggungJawab": "adadeh",
    "keluhan": [
        "panas",
        "pusing"
    ],
    "suhuTubuh": 35,
    "beratBadan": 99,
    "beratLahir": 3,
    "panjangLahir": 50,
    "tekananDarah": "110/90",
    "nadi": 83
}
```

**Response**
```JSON
{
    "status": "success",
    "message": "Create patient success",
    "data": {
        "patient": {
            "patientId": "bef26316-a7cd-4f84-989a-74150656a177",
            "NRM": "1111110101010012",
            "nama": "Ahmad Ali Masykur",
            "NIK": "1111110101010012",
            "jenisKelamin": "L",
            "umur": 21,
            "tempatLahir": "Banyumas",
            "tanggalLahir": "2002-01-27T00:00:00.000Z",
            "telephone": "0888888888",
            "JaminanKesehatan": "BPJS",
            "noBPJS": "111100011001",
            "alergi": [
                "kacang",
                "kacang mete"
            ],
            "alamat": "Yogyakarta, slebelah ugm",
            "telephonePenanggungJawab": "0899999999",
            "hubunganPenanggungJawab": "adadeh",
            "tanggalPemeriksaan": "2023-06-16T09:45:20.819Z",
            "keluhan": [
                "panas",
                "pusing"
            ],
            "suhuTubuh": 35,
            "beratBadan": 99,
            "beratLahir": 3,
            "panjangLahir": 50,
            "tekananDarah": "110/90",
            "nadi": 83,
            "updatedAt": "2023-06-16T09:45:20.819Z",
            "createdAt": "2023-06-16T09:45:20.819Z"
        }
    }
}
```

### Get all patients
