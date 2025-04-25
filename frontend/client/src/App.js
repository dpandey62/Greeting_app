import React, { useState } from 'react';
import GreetingForm from './components/GreetingForm';
import GreetingMessage from './components/GreetingMessage';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');

  const handleGreetSubmit = async (name, lang) => {
    try {
      const res = await fetch('http://localhost:5000/greet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lang }),
      });

      const data = await res.json();
      if (res.ok) {
        setGreeting(data.greeting);
        setError('');
      } else {
        setError(data.error || 'Something went wrong');
        setGreeting('');
      }
    } catch (err) {
      setError('Failed to connect to server');
      setGreeting('');
    }
  };

  return (
    <div className="container mt-5 text-center">

<div style={{
      backgroundColor: '#e0f7fa', 
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🌍 Greeting App</h1>
      <GreetingForm onSubmit={handleGreetSubmit} />
      <GreetingMessage message={greeting} />
      <ErrorMessage error={error} />
    </div>
    </div>
  );
}

export default App;
