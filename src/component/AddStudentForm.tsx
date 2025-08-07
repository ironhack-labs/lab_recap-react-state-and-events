import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = { ...form };
    newObj.id = crypto.randomUUID().toString();
    addStudent(newObj);
    setForm({
      id: "",
      name: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduated: false,
    });
  };
  return (
    <div className="formWholeContainer">
      <form onSubmit={handleSubmit} className="formContainer">
        <label>Full Name </label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          name="img"
          type="text"
          value={form.image}
          onChange={handleChange}
        />
        <label>Phone </label>
        <input
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Program</label>
        <select name="program" value={form.program} onChange={handleChange}>
          <option value="">-- Select Program --</option>
          <option value="Web Development">Web Development</option>
          <option value="UX/UI Design">UX/UI Design</option>
          <option value="Data Analytics">Data Analytics</option>
        </select>
        <div className="graduatedContainer">
          <label>Graduated</label>
          <input
            name="graduated"
            type="checkbox"
            checked={form.graduated}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
