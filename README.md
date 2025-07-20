# Task Manager

A modern, responsive task management application built with React and Vite. Manage your daily tasks with an intuitive interface featuring user authentication, task creation, editing, and deletion capabilities.

## 🚀 Live Demo

**[View Live Application](https://ashik-jyothi.github.io/task-manager/)**

## ✨ Features

- **User Authentication**: Secure login system with user session management
- **Task Management**: Create, read, update, and delete tasks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean interface built with Tailwind CSS
- **Real-time Updates**: Instant task updates without page refresh
- **Task Status Tracking**: Mark tasks as complete or pending
- **User-friendly Forms**: Intuitive task creation and editing forms

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Heroicons)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashik-jyothi/task-manager.git
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages:

1. Install gh-pages dependency (already included):
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📱 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── LoginForm.jsx
│   ├── common/
│   │   ├── ErrorMessage.jsx
│   │   └── LoadingSpinner.jsx
│   └── tasks/
│       ├── DeleteConfirmation.jsx
│       ├── TaskCard.jsx
│       ├── TaskForm.jsx
│       └── TaskList.jsx
├── hooks/
│   └── useAuth.js
├── services/
│   └── api.js
├── utils/
│   ├── constants.js
│   └── dateUtils.js
├── App.jsx
└── main.jsx
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Ashik Jyothi
