/* eslint-disable react/prop-types */
import './ListForm.css';

export default function ListForm({ label, options, selectedValue, onChange }) {
  return (
    <div className="list-form">
      <label>{label}</label>
      <select value={selectedValue} onChange={onChange}>
        <option value="" disabled>
          Select a database
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
