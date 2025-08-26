# 🛒 viStore - Full-Stack E-commerce Application

A modern, responsive e-commerce platform built with **React** frontend and **Django REST API** backend.

## 📸 Screenshots

### Frontend - Product Catalog
![Frontend Screenshot](https://github.com/VinciCantCode/viStore/blob/main/frontend/public/images/frontend-demo.png)

### Backend - REST API
![API Screenshot](https://github.com/VinciCantCode/viStore/blob/main/frontend/public/images/backend-demo.png)

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **React Bootstrap** - Responsive UI components  
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend  
- **Django 4.2** - Python web framework
- **Django REST Framework** - API development
- **CORS Headers** - Cross-origin resource sharing
- **SQLite** - Database (development)

## ✨ Features

- 📱 **Responsive Design** - Works on all devices
- 🛍️ **Product Catalog** - Browse electronics inventory
- ⭐ **Product Reviews** - Star ratings and user feedback
- 🔍 **Product Details** - Detailed product information
- 🎨 **Modern UI** - Clean, intuitive interface
- 🔄 **RESTful API** - Clean backend architecture

## 🏗️ Project Structure

```
viStore/
├── 📁 frontend/          # React application
│   ├── src/components/   # Reusable UI components
│   ├── src/screens/      # Page components
│   └── package.json      # Frontend dependencies
├── 📁 backend/           # Django application  
│   ├── backend/          # Django project settings
│   ├── base/             # Main app with models & views
│   └── manage.py         # Django management script
└── 📄 README.md          # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16+)
- **Python** (3.9+)
- **pip** (Python package manager)

### 1. Clone Repository
```bash
git clone https://github.com/VinciCantCode/viStore.git
cd viStore
```

### 2. Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

### 3. Frontend Setup
```bash
# Navigate to frontend (new terminal)
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

### 4. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **API Docs**: http://localhost:8000/api/products/

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/` | Get all products |
| GET | `/api/products/:id/` | Get single product |

## 🛠️ Development

### Frontend Development
```bash
cd frontend
npm start          # Start dev server
npm run build      # Build for production
```

### Backend Development  
```bash
cd backend
python manage.py runserver    # Start Django server
python manage.py shell        # Django shell
python manage.py migrate      # Run migrations
```

## 📦 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy /build folder
```

### Backend (Heroku/Railway)
```bash
# Add production database
# Configure environment variables
# Deploy backend folder
```

## 👨‍💻 Author

**VinciCantCode**
- GitHub: [@VinciCantCode](https://github.com/VinciCantCode)

## 🙏 Acknowledgments

- Django REST Framework documentation
- React Bootstrap components
- Inspiration from modern e-commerce platforms

---

⭐ **Star this repository if you found it helpful!** 
