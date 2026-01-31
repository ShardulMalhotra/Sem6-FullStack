import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [currentPage, setCurrentPage] = useState(1)

  const tabContent = {
    home: {
      title: 'Welcome Home',
      content: 'This is the home page with a beautiful layout and interactive elements. Navigate through different sections using the tabs above.',
      icon: 'fas fa-home',
      color: 'primary'
    },
    profile: {
      title: 'User Profile',
      content: 'Manage your profile settings, view your activity, and customize your preferences in this section.',
      icon: 'fas fa-user',
      color: 'success'
    },
    contact: {
      title: 'Get In Touch',
      content: 'Contact us through various channels. We are here to help you with any questions or concerns.',
      icon: 'fas fa-envelope',
      color: 'info'
    }
  }

  return (
    <div className="min-vh-100">
      {/* Enhanced Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Navigation
          </a>
          <button 
            className="navbar-toggler d-lg-none" 
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-home me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-th me-1"></i>Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-info-circle me-1"></i>About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-phone me-1"></i>Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-light me-2">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-warning">
                <i className="fas fa-user me-1"></i>Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary mb-3">
            Navigation System
          </h1>
          <p className="lead text-muted">Interactive navigation with tabs, pagination, and responsive design</p>
        </div>
        
        {/* Enhanced Tabs */}
        <div className="card shadow-lg mb-4">
          <div className="card-header bg-white border-0">
            <ul className="nav nav-pills nav-fill">
              {Object.entries(tabContent).map(([key, tab]) => (
                <li className="nav-item" key={key}>
                  <button 
                    className={`nav-link ${activeTab === key ? 'active' : ''} nav-pill-custom`}
                    onClick={() => setActiveTab(key)}
                  >
                    <i className={`${tab.icon} me-2`}></i>
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body p-4">
            <div className="tab-content-custom">
              <div className={`alert alert-${tabContent[activeTab].color} alert-custom`}>
                <div className="d-flex align-items-center">
                  <div className="alert-icon me-3">
                    <i className={tabContent[activeTab].icon}></i>
                  </div>
                  <div>
                    <h5 className="alert-heading mb-2">{tabContent[activeTab].title}</h5>
                    <p className="mb-0">{tabContent[activeTab].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Breadcrumb */}
        <nav className="mb-4">
          <div className="card">
            <div className="card-body py-2">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#"><i className="fas fa-home me-1"></i>Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#"><i className="fas fa-folder me-1"></i>Navigation</a>
                </li>
                <li className="breadcrumb-item active">
                  <i className="fas fa-file me-1"></i>Current Page
                </li>
              </ol>
            </div>
          </div>
        </nav>

        {/* Simple Pagination */}
        <div className="text-center">
          <nav>
            <ul className="pagination justify-content-center">
              {[1, 2, 3, 4, 5].map(page => (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                  <button 
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App