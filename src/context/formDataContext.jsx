/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from 'react';

// create context for formData
const FormDataContext = createContext();

// create provider for formData
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    connectionName: '',
    connectionMethod: '',
    hostName: '',
    port: '',
    userName: '',
    password: '',
    defaultSchema: '',
    sslDetails: {
      useSsl: '',
      sslKeyFile: '',
      sslCertFile: '',
    },
  });
  // Function to update formData
  const updateFormData = (key, value) => {
    if (
      key !== 'useSsl' &&
      key !== 'sslKeyFile' &&
      key !== 'sslCertFile' &&
      key !== 'sslCaFile' &&
      key !== 'sslCipher'
    ) {
      setFormData((prev) => ({ ...prev, [key]: value }));
    } else {
      setFormData((prev) => ({
        ...prev,
        sslDetails: {
          ...prev.sslDetails,
          [key]: value,
        },
      }));
    }
  };

  // empty the form fields
  const emptyFormData = () => {
    setFormData({
      connectionName: '',
      connectionMethod: '',
      hostName: '',
      port: '',
      userName: '',
      password: '',
      defaultSchema: '',
      sslDetails: {
        useSsl: '',
        sslKeyFile: '',
        sslCertFile: '',
      },
    });
  };

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, emptyFormData }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to access formData context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
