import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import './ConnectionPane.css';
import { useState } from 'react';
import ConnectionModal from '../ConnectionModal/ConnectionModal';

const connectionStyles = {
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  gap: '5px',
  padding: '5px',
  margin: '5px',
};

const hStyles = {
  color: '#333',
};

export default function ConnectionPane() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={connectionStyles} className="connections-pane">
      <h3 style={hStyles}>SQL Connections</h3>
      <AddCircleOutlineIcon onClick={() => setOpen(true)} className="icon" />
      <ConnectionModal open={isOpen} onClose={() => setOpen(false)} />
      <BuildCircleIcon className="icon" />
    </div>
  );
}
