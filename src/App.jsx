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
  // init localStorage for list of form data
  if (!localStorage.getItem('formDataList')) {
    localStorage.setItem('formDataList', JSON.stringify([]));
  }

  return (
    <div style={homeStyles}>
      <Header />
      <ConnectionPane />
      <ConnectionCard />
    </div>
  );
}
