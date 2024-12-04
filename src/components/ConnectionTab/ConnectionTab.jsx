/* eslint-disable react/prop-types */
import './ConnectionTab.css';

export default function ConnectionTab({ tab, onTabChange }) {
  return (
    <div className="connection-tab">
      <p
        className={`parameter ${tab === 'parameter' ? 'active' : ''}`}
        onClick={() => onTabChange('parameter')}
      >
        Parameter
      </p>
      <p
        className={`ssl ${tab === 'ssl' ? 'active' : ''}`}
        onClick={() => onTabChange('ssl')}
      >
        SSL
      </p>
    </div>
  );
}
