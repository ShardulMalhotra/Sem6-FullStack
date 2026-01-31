import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Badge, Tabs, Tab, Modal, ProgressBar } from "react-bootstrap";

export default function App() {
  const [template, setTemplate] = useState("classic");
  const [colorTheme, setColorTheme] = useState("blue");
  const [image, setImage] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");
  const [showPreview, setShowPreview] = useState(false);
  const [exportFormat, setExportFormat] = useState("html");
  const [showStats, setShowStats] = useState(true);
  
  const [data, setData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
    about: "",
    skills: "",
    projects: "",
    education: "",
    experience: "",
    achievements: "",
    languages: "",
    certifications: "",
    hobbies: ""
  });

  const colorThemes = {
    blue: { 
      primary: "#667eea", 
      secondary: "#764ba2", 
      gradient: "linear-gradient(45deg, #667eea, #764ba2)",
      shadow: "rgba(102, 126, 234, 0.25)"
    },
    purple: { 
      primary: "#a855f7", 
      secondary: "#ec4899", 
      gradient: "linear-gradient(45deg, #a855f7, #ec4899)",
      shadow: "rgba(168, 85, 247, 0.25)"
    },
    green: { 
      primary: "#10b981", 
      secondary: "#059669", 
      gradient: "linear-gradient(45deg, #10b981, #059669)",
      shadow: "rgba(16, 185, 129, 0.25)"
    },
    orange: { 
      primary: "#f59e0b", 
      secondary: "#ea580c", 
      gradient: "linear-gradient(45deg, #f59e0b, #ea580c)",
      shadow: "rgba(245, 158, 11, 0.25)"
    },
    red: { 
      primary: "#ef4444", 
      secondary: "#dc2626", 
      gradient: "linear-gradient(45deg, #ef4444, #dc2626)",
      shadow: "rgba(239, 68, 68, 0.25)"
    },
    teal: { 
      primary: "#14b8a6", 
      secondary: "#0d9488", 
      gradient: "linear-gradient(45deg, #14b8a6, #0d9488)",
      shadow: "rgba(20, 184, 166, 0.25)"
    }
  };

  const templates = [
    { id: "classic", name: "Classic Professional" },
    { id: "modern", name: "Modern Dark" },
    { id: "creative", name: "Creative Colorful" },
    { id: "minimal", name: "Minimal Clean" },
    { id: "dark", name: "Dark Mode" }
  ];

  const exportFormats = [
    { id: "html", name: "HTML", icon: "fab fa-html5" },
    { id: "pdf", name: "PDF", icon: "fas fa-file-pdf" },
    { id: "json", name: "JSON", icon: "fas fa-code" }
  ];

  useEffect(() => {
    const theme = colorThemes[colorTheme];
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--primary-gradient', theme.gradient);
    root.style.setProperty('--primary-shadow', theme.shadow);
    root.style.setProperty('--primary-text', '#333');
  }, [colorTheme]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const getCompletionPercentage = () => {
    const fields = Object.values(data).filter(value => value.trim() !== "");
    return Math.round((fields.length / Object.keys(data).length) * 100);
  };

  const downloadPortfolio = () => {
    const theme = colorThemes[colorTheme];
    
    if (exportFormat === "json") {
      const portfolioData = { ...data, template, colorTheme, image };
      const blob = new Blob([JSON.stringify(portfolioData, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${data.name || 'portfolio'}.json`;
      link.click();
      return;
    }

    const skillsArray = data.skills.split(',').map(s => s.trim()).filter(s => s);
    const projectsArray = data.projects.split('\n').filter(p => p.trim());
    const educationArray = data.education.split('\n').filter(e => e.trim());
    const experienceArray = data.experience.split('\n').filter(e => e.trim());
    const achievementsArray = data.achievements.split('\n').filter(a => a.trim());
    const languagesArray = data.languages.split(',').map(l => l.trim()).filter(l => l);
    const certificationsArray = data.certifications.split('\n').filter(c => c.trim());
    
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name || 'Portfolio'}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: ${theme.primary};
            --secondary-color: ${theme.secondary};
            --primary-gradient: ${theme.gradient};
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.6; 
            color: #333;
            background: ${template === 'dark' ? '#0f172a' : '#f8fafc'};
        }
        .hero { 
            background: var(--primary-gradient); 
            color: white; 
            padding: 100px 0; 
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
        .profile-img { 
            width: 180px; 
            height: 180px; 
            object-fit: cover; 
            border: 6px solid white; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
        }
        .profile-img:hover { transform: scale(1.05); }
        .skill-badge { 
            background: var(--primary-color); 
            margin: 5px; 
            padding: 8px 16px;
            border-radius: 25px;
            font-weight: 500;
        }
        .section { 
            padding: 80px 0; 
            ${template === 'dark' ? 'background: #1e293b; color: #f1f5f9;' : ''}
        }
        .section:nth-child(even) { 
            background: ${template === 'dark' ? '#0f172a' : '#ffffff'}; 
        }
        .card { 
            border: none; 
            border-radius: 20px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            ${template === 'dark' ? 'background: #334155; color: #f1f5f9;' : ''}
        }
        .card:hover { transform: translateY(-10px); }
        .social-links a { 
            color: white; 
            font-size: 1.5rem; 
            margin: 0 15px; 
            transition: transform 0.3s ease;
        }
        .social-links a:hover { 
            transform: translateY(-5px) scale(1.2); 
            color: white;
        }
        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }
        .shape {
            position: absolute;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    </style>
</head>
<body>
    <div class="hero text-center position-relative">
        <div class="floating-shapes">
            <div class="shape" style="width: 60px; height: 60px; top: 10%; left: 10%; animation-delay: 0s;"></div>
            <div class="shape" style="width: 40px; height: 40px; top: 20%; right: 15%; animation-delay: 2s;"></div>
            <div class="shape" style="width: 80px; height: 80px; bottom: 20%; left: 20%; animation-delay: 4s;"></div>
        </div>
        <div class="container position-relative">
            ${image ? `<img src="${image}" class="profile-img rounded-circle mb-4" alt="Profile">` : ''}
            <h1 class="display-3 fw-bold mb-3">${data.name || 'Your Name'}</h1>
            <p class="lead fs-4 mb-4">${data.role || 'Your Role'}</p>
            <div class="social-links mb-4">
                ${data.email ? `<a href="mailto:${data.email}"><i class="fas fa-envelope"></i></a>` : ''}
                ${data.phone ? `<a href="tel:${data.phone}"><i class="fas fa-phone"></i></a>` : ''}
                ${data.website ? `<a href="${data.website}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                ${data.linkedin ? `<a href="${data.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                ${data.github ? `<a href="${data.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                ${data.twitter ? `<a href="${data.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                ${data.instagram ? `<a href="${data.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
            </div>
        </div>
    </div>
    
    ${data.about ? `
    <div class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <h2 class="text-center mb-5 fw-bold">About Me</h2>
                    <p class="lead text-center">${data.about}</p>
                </div>
            </div>
        </div>
    </div>` : ''}
    
    ${skillsArray.length > 0 ? `
    <div class="section">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold">Skills & Expertise</h2>
            <div class="text-center">
                ${skillsArray.map(skill => `<span class="badge skill-badge fs-6 me-2 mb-2">${skill}</span>`).join('')}
            </div>
        </div>
    </div>` : ''}
    
    ${experienceArray.length > 0 ? `
    <div class="section">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold">Experience</h2>
            <div class="row">
                ${experienceArray.map((exp, index) => `
                <div class="col-md-6 mb-4">
                    <div class="card h-100 p-4">
                        <h5 class="card-title">${exp}</h5>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </div>` : ''}
    
    ${projectsArray.length > 0 ? `
    <div class="section">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold">Projects</h2>
            <div class="row">
                ${projectsArray.map((project, index) => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 p-4">
                        <h5 class="card-title">${project}</h5>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </div>` : ''}
    
    ${certificationsArray.length > 0 ? `
    <div class="section">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold">Certifications</h2>
            <div class="row justify-content-center">
                ${certificationsArray.map((cert, index) => `
                <div class="col-md-8 mb-3">
                    <div class="card p-4">
                        <p class="mb-0"><i class="fas fa-certificate me-2"></i>${cert}</p>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </div>` : ''}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
    
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${data.name || 'portfolio'}.html`;
    link.click();
  };

  const TemplatePreview = () => {
    const skillsArray = data.skills.split ? data.skills.split(',').map(s => s.trim()).filter(s => s) : data.skills || [];
    const projectsArray = data.projects ? data.projects.split('\n').filter(p => p.trim()) : [];
    const experienceArray = data.experience ? data.experience.split('\n').filter(e => e.trim()) : [];
    const educationArray = data.education ? data.education.split('\n').filter(e => e.trim()) : [];
    const certificationsArray = data.certifications ? data.certifications.split('\n').filter(c => c.trim()) : [];
    const templateClass = `template-${template}`;
    
    return (
      <div className="preview-container">
        <Card className={`${templateClass} position-relative overflow-hidden`} style={{
          background: template === 'modern' ? 'linear-gradient(135deg, #1f2937, #374151)' : 
                     template === 'creative' ? 'var(--primary-gradient, linear-gradient(135deg, #ff6b6b, #ee5a24))' :
                     template === 'dark' ? '#0f172a' : 'white',
          color: template === 'modern' || template === 'creative' || template === 'dark' ? 'white' : '#333',
          minHeight: 'auto',
          height: 'auto'
        }}>
          <Card.Body className="text-center position-relative p-4">
            {image && (
              <img 
                src={image} 
                alt="Profile" 
                className="profile-img rounded-circle mb-3"
              />
            )}
            <h3 className="fw-bold mb-2">{data.name || "Your Name"}</h3>
            <p className="mb-3 fw-medium">{data.role || "Your Role"}</p>
            
            {(data.email || data.phone || data.website) && (
              <div className="social-links mb-3">
                {data.email && <a href={`mailto:${data.email}`} className="social-link"><i className="fas fa-envelope"></i></a>}
                {data.phone && <a href={`tel:${data.phone}`} className="social-link"><i className="fas fa-phone"></i></a>}
                {data.website && <a href={data.website} className="social-link"><i className="fas fa-globe"></i></a>}
                {data.linkedin && <a href={data.linkedin} className="social-link"><i className="fab fa-linkedin"></i></a>}
                {data.github && <a href={data.github} className="social-link"><i className="fab fa-github"></i></a>}
              </div>
            )}
            
            {data.about && (
              <>
                <div className="section-divider"></div>
                <div className="mb-3">
                  <h6 className="fw-semibold">About</h6>
                  <p className="small text-start px-3">{data.about}</p>
                </div>
              </>
            )}
            
            {skillsArray.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-semibold">Skills</h6>
                <div>
                  {skillsArray.map((skill, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2 px-3 py-2" style={{fontSize: '0.8rem'}}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {projectsArray.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-semibold">Projects</h6>
                {projectsArray.map((project, index) => (
                  <div key={index} className="project-card text-start">
                    <small>{project}</small>
                  </div>
                ))}
              </div>
            )}
            
            {experienceArray.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-semibold">Experience</h6>
                {experienceArray.map((exp, index) => (
                  <div key={index} className="project-card text-start">
                    <small>{exp}</small>
                  </div>
                ))}
              </div>
            )}
            
            {educationArray.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-semibold">Education</h6>
                {educationArray.map((edu, index) => (
                  <div key={index} className="project-card text-start">
                    <small>{edu}</small>
                  </div>
                ))}
              </div>
            )}
            
            {certificationsArray.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-semibold">Certifications</h6>
                {certificationsArray.map((cert, index) => (
                  <div key={index} className="project-card text-start">
                    <small><i className="fas fa-certificate me-2"></i>{cert}</small>
                  </div>
                ))}
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="App">
      <Container fluid className="py-5 position-relative">
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h1 className="display-3 fw-bold hero-title mb-3">
              <i className="fas fa-magic me-3"></i>
              Portfolio Builder Pro
            </h1>
            <p className="lead hero-subtitle fs-4">Create stunning professional portfolios with advanced customization</p>
            
            {showStats && (
              <Row className="justify-content-center mt-4">
                <Col md={8}>
                  <Card className="feature-card">
                    <Card.Body>
                      <Row>
                        <Col md={4} className="text-center">
                          <div className="feature-icon">
                            <i className="fas fa-chart-line"></i>
                          </div>
                          <div className="stats-counter">{getCompletionPercentage()}%</div>
                          <small className="text-dark">Complete</small>
                        </Col>
                        <Col md={4} className="text-center">
                          <div className="feature-icon">
                            <i className="fas fa-palette"></i>
                          </div>
                          <div className="stats-counter">{Object.keys(colorThemes).length}</div>
                          <small className="text-dark">Themes</small>
                        </Col>
                        <Col md={4} className="text-center">
                          <div className="feature-icon">
                            <i className="fas fa-download"></i>
                          </div>
                          <div className="stats-counter">{exportFormats.length}</div>
                          <small className="text-dark">Formats</small>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={11}>
            <Row className="g-4">
              <Col lg={7}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Header className="bg-white border-bottom" style={{borderBottom: '1px solid #e5e7eb !important'}}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-gradient rounded-circle p-2 me-3">
                          <i className="fas fa-cogs text-white"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-dark fw-semibold">Portfolio Customization</h5>
                          <small className="text-muted">Configure your professional portfolio</small>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          onClick={() => setShowPreview(true)}
                        >
                          <i className="fas fa-eye me-1"></i>Preview
                        </Button>
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => setShowStats(!showStats)}
                        >
                          <i className="fas fa-chart-bar me-1"></i>Stats
                        </Button>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <ProgressBar 
                        now={getCompletionPercentage()} 
                        label={`${getCompletionPercentage()}% Complete`}
                        variant="success"
                      />
                    </div>
                    
                    <Tabs activeKey={activeTab} onSelect={setActiveTab} className="mb-4">
                      <Tab eventKey="basic" title={<><i className="fas fa-user me-2"></i>Basic Info</>}>
                        <Form>
                          <Row className="mb-3">
                            <Col md={6}>
                              <Form.Label className="fw-semibold">Template Style</Form.Label>
                              <Form.Select 
                                value={template}
                                onChange={(e) => setTemplate(e.target.value)}
                              >
                                {templates.map(temp => (
                                  <option key={temp.id} value={temp.id}>{temp.name}</option>
                                ))}
                              </Form.Select>
                            </Col>
                            <Col md={6}>
                              <Form.Label className="fw-semibold">Color Theme</Form.Label>
                              <Form.Select 
                                value={colorTheme}
                                onChange={(e) => setColorTheme(e.target.value)}
                              >
                                {Object.entries(colorThemes).map(([key, theme]) => (
                                  <option key={key} value={key}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)} Theme
                                  </option>
                                ))}
                              </Form.Select>
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col md={12}>
                              <Form.Label className="fw-semibold">Profile Photo</Form.Label>
                              <Form.Control 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageUpload}
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col md={6}>
                              <Form.Control
                                placeholder="Full Name *"
                                value={data.name}
                                onChange={(e) => setData({...data, name: e.target.value})}
                              />
                            </Col>
                            <Col md={6}>
                              <Form.Control
                                placeholder="Job Title/Role *"
                                value={data.role}
                                onChange={(e) => setData({...data, role: e.target.value})}
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col md={4}>
                              <Form.Control
                                type="email"
                                placeholder="Email Address"
                                value={data.email}
                                onChange={(e) => setData({...data, email: e.target.value})}
                              />
                            </Col>
                            <Col md={4}>
                              <Form.Control
                                placeholder="Phone Number"
                                value={data.phone}
                                onChange={(e) => setData({...data, phone: e.target.value})}
                              />
                            </Col>
                            <Col md={4}>
                              <Form.Control
                                placeholder="Website URL"
                                value={data.website}
                                onChange={(e) => setData({...data, website: e.target.value})}
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col md={6}>
                              <Form.Control
                                placeholder="LinkedIn Profile URL"
                                value={data.linkedin}
                                onChange={(e) => setData({...data, linkedin: e.target.value})}
                              />
                            </Col>
                            <Col md={6}>
                              <Form.Control
                                placeholder="GitHub Profile URL"
                                value={data.github}
                                onChange={(e) => setData({...data, github: e.target.value})}
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col md={6}>
                              <Form.Control
                                placeholder="Twitter Profile URL"
                                value={data.twitter}
                                onChange={(e) => setData({...data, twitter: e.target.value})}
                              />
                            </Col>
                            <Col md={6}>
                              <Form.Control
                                placeholder="Instagram Profile URL"
                                value={data.instagram}
                                onChange={(e) => setData({...data, instagram: e.target.value})}
                              />
                            </Col>
                          </Row>

                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="About yourself - Write a compelling summary..."
                            className="mb-3"
                            value={data.about}
                            onChange={(e) => setData({...data, about: e.target.value})}
                          />
                        </Form>
                      </Tab>

                      <Tab eventKey="skills" title={<><i className="fas fa-code me-2"></i>Skills & Projects</>}>
                        <Form>
                          <Form.Control
                            placeholder="Skills (comma separated) - e.g., React, Node.js, Python, AWS"
                            className="mb-3"
                            value={data.skills}
                            onChange={(e) => setData({...data, skills: e.target.value})}
                          />

                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Projects (one per line) - e.g., E-commerce Website with React and Node.js"
                            className="mb-3"
                            value={data.projects}
                            onChange={(e) => setData({...data, projects: e.target.value})}
                          />

                          <Form.Control
                            placeholder="Languages (comma separated) - e.g., English, Spanish, French"
                            className="mb-3"
                            value={data.languages}
                            onChange={(e) => setData({...data, languages: e.target.value})}
                          />

                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Certifications (one per line) - e.g., AWS Certified Developer"
                            className="mb-3"
                            value={data.certifications}
                            onChange={(e) => setData({...data, certifications: e.target.value})}
                          />

                          <Form.Control
                            placeholder="Hobbies & Interests (comma separated)"
                            className="mb-3"
                            value={data.hobbies}
                            onChange={(e) => setData({...data, hobbies: e.target.value})}
                          />
                        </Form>
                      </Tab>

                      <Tab eventKey="experience" title={<><i className="fas fa-briefcase me-2"></i>Experience</>}>
                        <Form>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Work Experience (one per line) - e.g., Senior Developer at Tech Corp (2020-2023)"
                            className="mb-3"
                            value={data.experience}
                            onChange={(e) => setData({...data, experience: e.target.value})}
                          />

                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Education (one per line) - e.g., Bachelor's in Computer Science - MIT (2018)"
                            className="mb-3"
                            value={data.education}
                            onChange={(e) => setData({...data, education: e.target.value})}
                          />

                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Achievements & Awards (one per line)"
                            className="mb-4"
                            value={data.achievements}
                            onChange={(e) => setData({...data, achievements: e.target.value})}
                          />
                        </Form>
                      </Tab>
                    </Tabs>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Label className="fw-semibold">Export Format</Form.Label>
                        <Form.Select 
                          value={exportFormat}
                          onChange={(e) => setExportFormat(e.target.value)}
                        >
                          {exportFormats.map(format => (
                            <option key={format.id} value={format.id}>
                              {format.name} Format
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={6} className="d-flex align-items-end">
                        <Button 
                          variant="secondary" 
                          className="me-2"
                          onClick={() => {
                            setData({
                              name: "", role: "", email: "", phone: "", website: "",
                              linkedin: "", github: "", twitter: "", instagram: "",
                              about: "", skills: "", projects: "", education: "",
                              experience: "", achievements: "", languages: "",
                              certifications: "", hobbies: ""
                            });
                            setImage(null);
                          }}
                        >
                          <i className="fas fa-trash me-1"></i>Clear All
                        </Button>
                      </Col>
                    </Row>

                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-100"
                      onClick={downloadPortfolio}
                    >
                      <i className="fas fa-download me-2"></i>
                      Download ({exportFormat.toUpperCase()})
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={5}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Header className="bg-white border-bottom" style={{borderBottom: '1px solid #e5e7eb !important'}}>
                    <div className="d-flex align-items-center">
                      <div className="bg-success bg-gradient rounded-circle p-2 me-3">
                        <i className="fas fa-eye text-white"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 text-dark fw-semibold">Live Preview</h5>
                        <small className="text-muted">Real-time portfolio preview</small>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body className="portfolio-preview">
                    <TemplatePreview />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={showPreview} onHide={() => setShowPreview(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Full Portfolio Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatePreview />
        </Modal.Body>
      </Modal>
    </div>
  );
}