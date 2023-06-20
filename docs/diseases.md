## Diseases

### Create disease

**Request**

```http
POST /api/v0/diseases
```

**Request Body**

```JSON
{
    "nama": "demam",
    "medicines": [
        "panadol",
        "paracetamol"
    ],
    "keluhan": [
        "sakit kepala",
        "panas"
    ]
}
```

**Response**

```JSON
{
    "status": "success",
    "message": "Create disease success",
    "data": {
        "disease": {
            "diseaseId": "a5d0bc74-e886-4096-9625-bf93d1fc1c54",
            "nomor": 1,
            "nama": "demam",
            "keluhan": [
                "sakit kepala",
                "panas"
            ],
            "updatedAt": "2023-06-19T12:13:00.111Z",
            "createdAt": "2023-06-19T12:13:00.111Z"
        }
    }
}
```

### Get all diseases

**Request**

```http
GET /api/v0/diseases
```

**Response**

```JSON
{
    "status": "success",
    "message": "Get all disease success",
    "data": {
        "total_diseases": 3,
        "disease": [
            {
                "diseaseId": "f8b1a1de-d601-4cc0-af09-d5dd65f66bbf",
                "nomor": 1,
                "nama": "demam",
                "treatments": null,
                "keluhan": [
                    "sakit kepala",
                    "panas"
                ],
                "createdAt": "2023-06-20T12:32:40.000Z",
                "updatedAt": "2023-06-20T12:32:40.000Z"
            },
            {
                "diseaseId": "88b6a18d-5fc8-4ffe-abd3-a29893908ace",
                "nomor": 2,
                "nama": "flu",
                "treatments": null,
                "keluhan": [
                    "batuk-batuk",
                    "panas"
                ],
                "createdAt": "2023-06-20T12:33:33.000Z",
                "updatedAt": "2023-06-20T12:33:33.000Z"
            }
        ]
    }
}
```

### Get disease by id

**Request**

```http
GET /api/v0/diseases/:id
```

**Example**

```http
GET /api/v0/diseases/a5d0bc74-e886-4096-9625-bf93d1fc1c54
```

**Response**

```JSON
{
    "status": "success",
    "message": "Get disease by id success",
    "data": {
        "disease": {
            "diseaseId": "a5d0bc74-e886-4096-9625-bf93d1fc1c54",
            "nomor": 1,
            "nama": "demam",
            "treatments": null,
            "keluhan": [
                "sakit kepala",
                "panas"
            ],
            "createdAt": "2023-06-19T12:13:00.000Z",
            "updatedAt": "2023-06-19T12:13:00.000Z"
        }
    }
}
```

### Update disease

**Request**

```http
PUT /api/v0/diseases/:id
```

**Example**

```http
PUT /api/v0/diseases/a5d0bc74-e886-4096-9625-bf93d1fc1c54
```

**Request Body**

```JSON
{
    "nomor": 1,
    "nama": "demam",
    "medicines": [
        "panadol",
        "paracetamol",
        "sanmol"
    ],
    "keluhan": [
        "sakit kepala",
        "panas",
        "mual"
    ]
}
```

**Response**

```JSON
{
    "status": "success",
    "message": "Update disease success",
    "data": {
        "disease": {
            "diseaseId": "a5d0bc74-e886-4096-9625-bf93d1fc1c54",
            "nomor": 1,
            "nama": "demam",
            "treatments": null,
            "keluhan": [
                "sakit kepala",
                "panas",
                "mual"
            ],
            "createdAt": "2023-06-19T12:13:00.000Z",
            "updatedAt": "2023-06-19T12:18:53.000Z"
        }
    }
}
```

### Delete disease

**Request**

```http
DELETE /api/v0/diseases/:id
```

**Example**

```http
DELETE /api/v0/diseases/a5d0bc74-e886-4096-9625-bf93d1fc1c54
```

**Response**

```JSON
{
    "status": "success",
    "message": "Delete doctor success",
    "data": {
        "delete": 0
    }
}
```