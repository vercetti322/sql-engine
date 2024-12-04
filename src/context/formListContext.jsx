/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

// create context for form data list
const FormListContext = createContext();

// create context for form data list provider
export function FormListProvider({ children }) {
  const [formDataList, setFormDataList] = useState([]);

  const addFormData = (formData) => {
    setFormDataList([...formDataList, formData]);
  };

  const removeFormData = (index) => {
    setFormDataList(formDataList.filter((_, i) => i !== index));
  };

  return (
    <FormListContext.Provider
      value={{ formDataList, addFormData, removeFormData }}
    >
      {children}
    </FormListContext.Provider>
  );
}

// use form data list context
export function useFormList() {
  return useContext(FormListContext);
}
