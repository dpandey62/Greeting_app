import React from 'react';

function GreetingMessage({ message }) {
  return message ? <div className="alert alert-success mt-3">{message}</div> : null;
}

export default GreetingMessage;
