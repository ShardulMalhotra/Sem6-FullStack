# 🔐 Spring Security + JWT Authentication Demo

This project demonstrates how to implement authentication and authorization using Spring Security and JSON Web Tokens (JWT) in a RESTful API.

It showcases how users can securely log in and access protected resources by passing a Bearer Token in the Authorization header.

---

## 🚀 Features

- User Authentication using Email & Password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Hibernate / JPA
- MySQL / PostgreSQL
- Maven

---

## 📁 Project Structure

com.agam.rest_example
│
├── Controller
├── Service
├── Repository
├── Entity
├── Security
└── Config

---

## 🔑 Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

---

## 📌 API Endpoints

### 🔓 Public Endpoints

POST /register

POST /login


---

### 🔒 Protected Endpoints

GET /api/students/{id}

Headers:
Authorization: Bearer <your_jwt_token>

---

## 🧪 Testing with Postman

1. Login using /api/auth/login
2. Copy token
3. Use it in Authorization header for protected APIs

---

## 🔐 Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before UsernamePasswordAuthenticationFilter
- BCrypt password encoding

---
## Screenshots

<img width="1440" height="900" alt="Screenshot 2026-04-02 at 9 28 38 AM" src="https://github.com/user-attachments/assets/9a591bce-844e-4d20-a8b1-5dc686fb56dc" />

<img width="1440" height="900" alt="Screenshot 2026-04-02 at 9 29 52 AM" src="https://github.com/user-attachments/assets/7e31db44-9b87-45cd-b59b-329b2cab8a55" />

<img width="1440" height="900" alt="Screenshot 2026-04-02 at 9 30 25 AM" src="https://github.com/user-attachments/assets/ed62eb06-0239-4c4c-8cd7-565842badeb3" />



<img width="1440" height="900" alt="Screenshot 2026-04-02 at 9 31 04 AM" src="https://github.com/user-attachments/assets/f5fa98bf-3707-4ade-be16-c3ba77efc7ba" />





---

## ▶️ How to Run

git clone https://github.com/your-username/your-repo.git
cd your-repo
mvn spring-boot:run

---

## 👨‍💻 Author

Agampal Singh
