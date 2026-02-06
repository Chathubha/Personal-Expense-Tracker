# 💰 Personal-Expense-Tracker

A simple and clean **RESTful backend API** for managing personal expenses.  
Built with **Node.js, Express, and MongoDB** as a beginner-friendly but real-world project.

---

## 🚀 Features

- ➕ Add a new expense  
- 📄 View all expenses  
- ❌ Delete an expense  
- 🗄️ Data stored securely in MongoDB Atlas  

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **Postman** (for API testing)

---

## 📁 Project Structure

    expense-tracker/
    ├── models/
    │ └── Expense.js
    ├── routes/
    │ └── expenseRoutes.js
    ├── .env
    ├── .gitignore
    ├── server.js
    ├── package.json
    └── README.md

    
---

## 🔗 API Endpoints

### ➕ Add Expense
**POST** `/api/expenses`

```json
{
  "title": "Lunch",
  "amount": 350,
  "category": "Food"
}


