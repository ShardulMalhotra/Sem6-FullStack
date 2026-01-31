import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
    subscribe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
    console.log(formData)
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Bootstrap Forms</h1>
          
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Contact Form</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select 
                    className="form-select" 
                    id="country" 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="india">India</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="subscribe" 
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    Subscribe to newsletter
                  </label>
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-info btn-lg">Submit</button>
                  <button type="reset" className="btn btn-outline-warning">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App