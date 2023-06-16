## Authentication

### Signup

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `firstname` | `string` | **Required**. |
| `lastname` | `string` | **Required**. |
| `telephone` | `string` | **Required**. |
| `roles` | `array` | **Optional**, use default value if empty |

**Request**

```http
POST /api/v0/auth/signup
```

**Body**
```json
{
  "username": "user",
  "password": "password",
  "firstname": "user",
  "lastname": "user",
  "telephone": "08123456789",
  "roles": ["staff", "admin"]
}
```

**Response**
```json
{
    "status": "success",
    "message": "User was registered successfully!",
    "data": {
        "user": {
            "userId": "6039f0ca-5c5a-4e42-b978-6dde6fa446e8",
            "username": "admin",
            "roles": [
                "staff",
                "admin"
            ]
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDM5ZjBjYS01YzVhLTRlNDItYjk3OC02ZGRlNmZhNDQ2ZTgiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsic3RhZmYiXSwiaWF0IjoxNjg2NTU4MjkyLCJleHAiOjE2ODY2NDQ2OTJ9.-lWgtEWh329Y51565w-ZFW5JN1jP9RkIaygiLYFchuw"
    }
}
```

### Signin

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |

**Request**

```http
POST /api/v0/auth/signin
```

**Body**
```json
{
  "username": "user",
  "password": "password"
}
```

**Response**

```json
{
    "status": "success",
    "message": "Login successful!",
    "data": {
        "user": {
            "userId": "6039f0ca-5c5a-4e42-b978-6dde6fa446e8",
            "username": "admin",
            "roles": [
                "staff"
            ]
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDM5ZjBjYS01YzVhLTRlNDItYjk3OC02ZGRlNmZhNDQ2ZTgiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsic3RhZmYiXSwiaWF0IjoxNjg2NTU4NDY1LCJleHAiOjE2ODY2NDQ4NjV9.Oy6FMC9KO0TwttulwUzuGlwPHqFb1DjLv6OwX2RouVM"
    }
}
```

### Signout

<!-- Example -->

**Request**

```http
POST /api/v0/auth/signout
```

**Response**

```json
{
    "status": "success",
    "message": "User was signed out successfully!"
}
```