import './ConnectionCard.css';

export default function ConnectionCard() {
  const formDataList = localStorage.getItem('formDataList')
    ? JSON.parse(localStorage.getItem('formDataList'))
    : [];

  return (
    <div className="connection-card-list">
      {formDataList.map((formData, index) => (
        <div key={index} className="connection-card">
          <h3>{formData.connectionName}</h3>
          <p className='dbType'>{formData.databaseType}</p>
          <p className='urlType'>{`${formData.hostName}:${formData.port}`}</p>
        </div>
      ))}
    </div>
  );
}
