import Header from './components/Header/Header';
import ConnectionPane from './components/ConnectionPane/ConnectionPane';
import ConnectionCard from './components/ConnectionCard/ConnectionCard';

const homeStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'cetnter',
  alignItems: 'center',
  margin: '5px',
  gap: '15px',
};

export default function App() {
  return (
    <div style={homeStyles}>
      <Header />
      <ConnectionPane />
      <ConnectionCard />
    </div>
  );
}
