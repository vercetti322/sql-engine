/* eslint-disable react/prop-types */
import './Form.css';

export default function Form({
  onChange,
  label,
  type,
  min = null,
  max = null,
}) {
  return (
    <div className="form">
      <label>{label}</label>
      <input min={min} max={max} type={type} onChange={onChange} />
    </div>
  );
}
