
# RESTful API for Personal Blogging Platform

### Source Requirements: [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api)

## Goals
The main objectives of this project are to:
- Understand RESTful APIs, best practices, and conventions.
- Learn how to create a RESTful API.
- Get familiar with common HTTP methods (GET, POST, PUT, PATCH, DELETE).
- Understand status codes and error handling in APIs.
- Perform CRUD operations using an API.
- Work with databases.

## Requirements
The RESTful API for a personal blogging platform should support the following operations:
- Create a new blog post.
- Update an existing blog post.
- Delete an existing blog post.
- Retrieve a single blog post.
- Retrieve all blog posts.
- Filter blog posts by a search term.

### CRUD Operations Details

### 1. Create Blog Post
**Method:** `POST /posts`

**Request Body Example:**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

**Errors (400 Bad Request):**
- Return an error message with validation issues.

### 2. Update Blog Post
**Method:** `PUT /posts/{id}`

**Request Body Example:**
```json
{
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

**Errors:**
- 400 Bad Request for validation issues.
- 404 Not Found if the blog post does not exist.

### 3. Delete Blog Post
**Method:** `DELETE /posts/{id}`

**Response (204 No Content):**
- Indicates successful deletion.

**Errors:**
- 404 Not Found if the blog post does not exist.

### 4. Get Single Blog Post
**Method:** `GET /posts/{id}`

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

**Errors:**
- 404 Not Found if the blog post does not exist.

### 5. Get All Blog Posts
**Method:** `GET /posts`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  },
  {
    "id": 2,
    "title": "My Second Blog Post",
    "content": "This is the content of my second blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:30:00Z",
    "updatedAt": "2021-09-01T12:30:00Z"
  }
]
```

### 6. Filter Blog Posts by Search Term
**Method:** `GET /posts?term=searchTerm`

**Description:** Performs a wildcard search on `title`, `content`, or `category` fields.

## Tech Stack Recommendations
- **Programming Languages/Frameworks:**
  - JavaScript: Node.js with Express.js
  - Python: Flask or Django
  - Java: Spring Boot
  - Ruby: Ruby on Rails

- **Databases:**
  - SQL: MySQL
  - NoSQL: MongoDB
