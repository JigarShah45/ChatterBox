
# 💬 Real-Time Chat App

A **real-time chat application** built using **React** for the frontend and **Node.js + Express + Socket.io** for the backend. Users can send and receive messages instantly in a modern and user-friendly interface. 🚀

---

## ✨ Features

- 💬 Real-time messaging with **Socket.io**
- 🖥️ Responsive and modern user interface
- 👥 Multiple users can chat simultaneously
- 🔧 Easy to extend with authentication, private messaging, or rooms
- ⚡ Lightweight and fast

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript, CSS  
- **Backend:** Node.js, Express, Socket.io  
- **Other Tools:** npm, CORS
  
---

## ⚡ Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/<your-username>/real-time-chat-app.git
cd real-time-chat-app
````

2. **Setup Backend:**

```bash
mkdir chat-app-backend
cd chat-app-backend
npm init -y
npm install express socket.io cors

```

3. **Setup Frontend:**

```bash
npx create-react-app chat-app-frontend
cd chat-app-frontend
npm install socket.io-client

```

4. Open your browser at [http://localhost:3000](http://localhost:3000)
   
6.  🖥️ Run the App

Start backend → node server.js

Start frontend → npm start

Open two browsers → join same room → chat live 🔥

---

## 🖼 Screenshots


**Login Page for User 1**

<img width="392" height="316" alt="image" src="https://github.com/user-attachments/assets/340b34b3-4d91-46f5-a285-a77fb01dddb6" />

**Login Page for User 2**

<img width="414" height="287" alt="image" src="https://github.com/user-attachments/assets/23b76273-60c0-4570-8ae8-838ede0b28a8" />


**Chat Window for User 1**

<img width="425" height="583" alt="image" src="https://github.com/user-attachments/assets/56667ce4-788d-423e-a7da-cb3207ef02cd" />

**Chat Window for User 2**

<img width="412" height="566" alt="image" src="https://github.com/user-attachments/assets/c106069a-15c0-4ae7-bc00-dde753d0390b" />


---

## 🚀 Usage

* Type a message in the input box and click **Send**
* Messages are broadcasted to all connected users in real-time
* Supports multiple users chatting simultaneously

---

## 🔮 Future Enhancements

* 🔑 User authentication and profiles
* 🕵️‍♂️ Private messages and chat rooms
* ⏱️ Message timestamps and delivery status
* 😄 Emoji support and media attachments

---
