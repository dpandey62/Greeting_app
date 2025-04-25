import React, { useState } from 'react';

function GreetingForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [lang, setLang] = useState('en');

  const handleSubmit = () => {
    if (name.trim() !== '') {
      onSubmit(name, lang);
    }
  };

  const languageOptions = [
    { code: 'en', label: 'English (Hello)' },
    { code: 'hi', label: 'Hindi (नमस्ते)' },
    { code: 'es', label: 'Spanish (Hola)' },
    { code: 'fr', label: 'French (Salut)' },
    { code: 'de', label: 'German (Hallo)' }
  ];

  return (
    <div className="my-4">
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="form-select mb-2"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {languageOptions.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.label}
          </option>
        ))}
      </select>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Greet Me
      </button>
    </div>
  );
}

export default GreetingForm;
