import { useState } from 'react';

export default function AddStudentForm({ onAddStudent }) {
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [graduated, setGraduated] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const id = (crypto?.randomUUID?.() || String(Date.now()));
    const newStudent = { _id: id, fullName, image, phone, email, program, graduated };
    onAddStudent(newStudent);
    setFullName(''); setImage(''); setPhone(''); setEmail(''); setProgram(''); setGraduated(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New Student</h2>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="url" value={image} onChange={e=>setImage(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </label>
      <label>
        Program:
        <select value={program} onChange={e=>setProgram(e.target.value)} required>
          <option value="">-- Please select --</option>
          <option value="Web Dev">Web Dev</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Data">Data</option>
        </select>
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={graduated} onChange={e=>setGraduated(e.target.checked)} />
        Graduated
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}
