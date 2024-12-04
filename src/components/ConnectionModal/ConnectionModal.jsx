/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom';
import Form from '../Form/Form';
import './ConnectionModal.css';
import { useState } from 'react';
import ConnectionTab from '../ConnectionTab/ConnectionTab';
import { useFormData } from '../../context/formDataContext';
import { useFormList } from '../../context/formListContext';

export default function ConnectionModal({ open, onClose }) {
  const [tab, setTab] = useState('parameter');

  const { formData, updateFormData, emptyFormData } = useFormData();

  const { formList, addFormData, removeFormData } = useFormList();

  const [isFormValid, setIsFormValid] = useState(false);

  const handleTab = (newTab) => {
    setTab(newTab);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    addFormData(formData);
    emptyFormData();
    onClose();
  };

  const cancelForm = () => {
    emptyFormData();
    onClose();
  };

  const validateForm = () => {
    const form = document.querySelector('.connection-modal');
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  };

  const parameterOpen = tab === 'parameter';

  if (!open) return null;

  const handleChange = (key, value) => {
    updateFormData(key, value);
  };

  return createPortal(
    <div className="modal-overlay">
      <div className="connection-modal">
        <h3>Setup New Connection</h3>
        <Form
          onChange={(e) => handleChange('connectionName', e.target.value)}
          type={'text'}
          requried={true}
          label={'Connection Name'}
        />
        <Form
          onChange={(e) => handleChange('connectionMethod', e.target.value)}
          type={'text'}
          requried={true}
          label={'Connection Method'}
        />
        <ConnectionTab tab={tab} onTabChange={handleTab} />
        {parameterOpen && (
          <>
            <div className="connection-url">
              <Form
                onChange={(e) => handleChange('hostName', e.target.value)}
                type={'text'}
                requried={true}
                label={'Hostname'}
              />
              <Form
                onChange={(e) => handleChange('port', e.target.value)}
                min={1000}
                max={9999}
                type={'number'}
                label={'Port'}
                requried={true}
              />
            </div>
            <Form
              onChange={(e) => handleChange('userName', e.target.value)}
              type={'text'}
              label={'Username'}
              requried={true}
            />
            <Form
              onChange={(e) => handleChange('password', e.target.value)}
              type={'password'}
              label={'Password'}
              requried={true}
            />
            <Form
              onChange={(e) => handleChange('defaultSchema', e.target.value)}
              type={'text'}
              label={'Default Schema'}
            />
            <div className="button-group">
              <button type="submit" className="solid" onClick={submitForm}>
                Submit
              </button>
              <button type="button" className="outline" onClick={cancelForm}>
                Cancel
              </button>
            </div>
          </>
        )}
        {!parameterOpen && (
          <>
            <div className="ssl-fields">
              <Form
                onChange={(e) => handleChange('useSsl', e.target.value)}
                type={'text'}
                label={'Use SSL'}
              />
              <Form
                onChange={(e) => handleChange('sslKeyFile', e.target.value)}
                type={'password'}
                label={'SSL Key File'}
              />
            </div>
            <Form
              onChange={(e) => handleChange('sslCertFile', e.target.value)}
              type={'text'}
              label={'SSL CERT File'}
            />
            <Form
              onChange={(e) => handleChange('sslCaFile', e.target.value)}
              type={'text'}
              label={'SSL CA File'}
            />
            <Form
              onChange={(e) => handleChange('sslCipher', e.target.value)}
              type={'text'}
              label={'SSL Cipher'}
            />
            <div className="button-group">
              <button
                style={{ gridColumn: 5 }}
                className="solid"
                onClick={() => setTab('parameter')}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById('portal')
  );
}
