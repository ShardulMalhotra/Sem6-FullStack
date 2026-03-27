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
## Screenshots

<img width="724" height="716" alt="Screenshot 2026-03-27 at 3 24 16 PM" src="https://github.com/user-attachments/assets/e7c59e4d-3387-43ac-94af-ba9be06feb86" />

<img width="708" height="690" alt="Screenshot 2026-03-27 at 3 24 43 PM" src="https://github.com/user-attachments/assets/858b3ab8-c5ed-45bc-8186-7d6fd86c7945" />
<img width="715" height="703" alt="Screenshot 2026-03-27 at 3 24 54 PM" src="https://github.com/user-attachments/assets/ba3062a1-7fba-4b1a-b028-1ed0eee8959d" />
<img width="702" height="744" alt="Screenshot 2026-03-27 at 3 25 36 PM" src="https://github.com/user-attachments/assets/e530ebea-8ad9-4ce7-97ce-0b5baf16e2c1" />
<img width="727" height="733" alt="Screenshot 2026-03-27 at 3 25 56 PM" src="https://github.com/user-attachments/assets/12444f25-40c4-427f-8a51-a7fa1<img width="716" height="700" alt="Screenshot 2026-03-27 at 3 43 47 PM" src="https://github.com/user-attachments/assets/963c32dc-082c-416d-828c-d31ee944122b" />
d4de0d4" />
![Uploading Screenshot 2026-03-27 at 3.24.54 PM.png…]()
<img width="704" height="723" alt="Screenshot 2026-03-27 at 3 44 05 PM" src="https://github.com/user-attachments/assets/cb1a02a4-1c8f-43f0-ba16-f53ee1d07170" />

