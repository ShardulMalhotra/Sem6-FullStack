import { useState } from "react";

function ValidatedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    // if no errors → valid
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          padding: "100px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Client-Side Validation Form</h2>

        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidatedForm;