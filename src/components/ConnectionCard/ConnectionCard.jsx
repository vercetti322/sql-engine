import { useFormList } from '../../context/formListContext';
import './ConnectionCard.css';

export default function ConnectionCard() {
  const { formDataList } = useFormList();
  console.log(formDataList);
  return (
    <div className="connection-card-list">
      {formDataList.map((formData, index) => (
        <div key={index} className="connection-card">
          <h3>{formData.connectionName}</h3>
          <p>{formData.userName}</p>
          <p>{`${formData.hostName}:${formData.port}`}</p>
        </div>
      ))}
    </div>
  );
}
