/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Form.css';

export default function Form({
  label,
  onChange,
  type,
  min = null,
  max = null,
  required = false, // New: Required field support
}) {
  const [error, setError] = useState(''); // Track error messages

  const validateField = (value) => {
    if (required && !value) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  const handleBlur = (e) => {
    validateField(e.target.value); // Validate when field loses focus
  };

  const handleChange = (e) => {
    setError(''); // Clear errors on change
    onChange(e); // Trigger parent onChange handler
  };

  return (
    <div className="form">
      <label>{label}</label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        type={type}
        required={required}
      />
      {error && <p className="form-error">{error}</p>} {/* Render error */}
    </div>
  );
}
