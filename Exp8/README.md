# Experiment 8 – Spring Boot REST API

A simple Spring Boot REST API demonstrating CRUD operations using an in-memory list.

## Tech Stack

- Java 17
- Spring Boot 3.x
- Spring Web (REST)
- MySQL (configured, not required for in-memory demo)
- Maven

## Project Structure

```
src/main/java/com/example/demo/
├── DemoApplication.java     # Entry point
└── TestController.java      # REST controller with CRUD endpoints
```

## API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/users`        | Fetch all users          |
| POST   | `/users`        | Add a new user           |
| PUT    | `/users/{index}`| Update user by index     |
| DELETE | `/users/{index}`| Delete user by index     |

## Sample Requests

**POST** `/users`
```json
{ "name": "John", "email": "john@example.com" }
```

**PUT** `/users/0`
```json
{ "name": "Jane", "email": "jane@example.com" }
```

## Running the App

```bash
mvn spring-boot:run
```

Server starts at `http://localhost:8080`

## Database Configuration

Update `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/demo_db
spring.datasource.username=root
spring.datasource.password=your_password
```
