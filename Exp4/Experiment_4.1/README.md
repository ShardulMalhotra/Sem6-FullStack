# Experiment 4.1
## Global State Management using React Context API

---

## 🎯 Aim

To implement global state management in a Single Page Application (SPA) using the React Context API.

---

## 📚 Theory

In React applications, passing data through multiple components using props can become complex. This problem is known as **prop drilling**.

The **React Context API** provides a way to share global data such as themes, user information, or application settings across components without passing props manually at every level.

### Key Concepts Used:

- `createContext()` → Creates a global state container  
- `Context.Provider` → Supplies global state to components  
- `useContext()` → Consumes global state inside child components  

---


## ⚙️ Procedure

1. Created a React project using:

## ⚙️ Procedure

1. Created a React project using:
npm create vite@latest


3. Installed dependencies:
npm install


4. Created a Context using `createContext()`.

5. Wrapped the application with `GlobalProvider`.

6. Used `useContext()` inside child components to access global state.

7. Implemented:
- User state
- Theme toggle functionality

---

## 💡 Features Implemented

- Global user state
- Global theme state (Light/Dark mode)
- Toggle theme button
- Dynamic username update
- Full-page responsive layout

---

## 🖥️ Output Description

- Navbar displays current user name.
- Clicking **Change User Name** updates global state.
- Clicking **Toggle Theme** changes the entire application's theme.
- No prop drilling used.

---

<img width="1913" height="621" alt="Screenshot 2026-02-15 223804" src="https://github.com/user-attachments/assets/649aac49-4513-4c53-b918-4823431bb363" />
<img width="1919" height="646" alt="Screenshot 2026-02-15 223815" src="https://github.com/user-attachments/assets/ed0bc3d4-fe2a-457c-a7a0-8725e1b989ea" />
<img width="1918" height="580" alt="Screenshot 2026-02-15 223831" src="https://github.com/user-attachments/assets/b21a1b7a-393a-430a-87ad-68e270e88dc8" />


