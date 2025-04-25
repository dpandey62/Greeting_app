import React from 'react';

function ErrorMessage({ error }) {
  return error ? <div className="alert alert-danger mt-3">{error}</div> : null;
}

export default ErrorMessage;
