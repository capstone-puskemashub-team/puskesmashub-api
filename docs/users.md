## Users

### Get all users

**Request**

```http
GET /api/v0/users
```

**Response**

```json
{
    "status": "success",
    "message": "Users retrieved successfully!",
    "data": [
        {
            "userId": "6039f0ca-5c5a-4e42-b978-6dde6fa446e8",
            "username": "admin",
            "firstname": "admin",
            "lastname": "admin",
            "telephone": "08123456789",
            "roles": [
                "staff",
                "admin"
            ]
        },
        {
            "userId": "6039f0ca-5c5a-4e42-b978-6dde6fa446e8",
            "username": "admin",
            "firstname": "admin",
            "lastname": "admin",
            "telephone": "08123456789",
            "roles": [
                "staff",
                "admin"
            ]
        }
    ]
}
```

### Get user by id

**Request**

```http
GET /api/v0/users/:id
```

**Example**

```http
GET /api/v0/users/6039f0ca-5c5a-4e42-b978-6dde6fa446e8
```

**Response**

```json
{
    "status": "success",
    "message": "User retrieved successfully!",
    "data": {
        "userId": "6039f0ca-5c5a-4e42-b978-6dde6fa446e8",
        "username": "admin",
        "firstname": "admin",
        "lastname": "admin",
        "telephone": "08123456789",
        "roles": [
            "staff",
            "admin"
        ]
    }
}
```

### Update user
