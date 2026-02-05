# Todo App API Contract

This document describes the API endpoints expected by the frontend for the Todo app.

## Base URL
`/api/todos`

---

## Todo Object

```
{
  "id": number,           // Unique identifier for the todo
  "title": string,        // The todo text
  "completed": boolean    // Whether the todo is completed
}
```

## Endpoints

### 1. Get all todos
- **Method:** GET
- **URL:** `/api/todos`
- **Request Body:** None
- **Response:**
```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false
  },
  ...
]
```

### 2. Add a new todo
- **Method:** POST
- **URL:** `/api/todos`
- **Request Body:**
```json
{
  "title": "Read a book",
  "completed": false
}
```
- **Response:**
```json
{
  "id": 2,
  "title": "Read a book",
  "completed": false
}
```

### 3. Update a todo
- **Method:** PUT
- **URL:** `/api/todos/{id}`
- **Request Body:**
```json
{
  "title": "Read a book",
  "completed": true
}
```
- **Response:**
```json
{
  "id": 2,
  "title": "Read a book",
  "completed": true
}
```

### 4. Delete a todo
- **Method:** DELETE
- **URL:** `/api/todos/{id}`
- **Request Body:** None
- **Response:**
```json
{
  "success": true
}
```

---

## Error Handling
- On error, respond with status code 4xx/5xx and a JSON body:
```json
{ "error": "Error message" }
```

## Notes
- All responses are JSON.
- `id` is a unique identifier for each todo item.
- The frontend expects the above contract for seamless integration.
