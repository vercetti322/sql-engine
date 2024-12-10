/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom';
import Form from '../Form/Form';
import './ConnectionModal.css';
import { dbOptions } from '../../assets/constants.js';
import ListForm from '../ListForm/ListForm';
import { reuqiredFields } from '../../assets/constants.js';
import { useState } from 'react';
import ConnectionTab from '../ConnectionTab/ConnectionTab';
import useFormData from '../../hooks/useFormData';

export default function ConnectionModal({ open, onClose }) {
  const [tab, setTab] = useState('parameter');

  const { formData, updateFormData } = useFormData();

  const handleDbChange = (event) => {
    const { value } = event.target;
    updateFormData('databaseType', value);
  };

  const validateForm = () => {
    for (let field of reuqiredFields) {
      if (!formData[field] || formData[field].toString().trim() === '') {
        alert(`${field} is required`);
        return false;
      }
    }

    return true;
  };

  const handleTab = (newTab) => {
    setTab(newTab);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const formDataList = JSON.parse(localStorage.getItem('formDataList'));
    formDataList.push(formData);
    localStorage.setItem('formDataList', JSON.stringify(formDataList));
    onClose();
  };

  const cancelForm = () => {
    onClose();
  };

  const testConnection = () => {
    if (!validateForm()) return;
    onClose();
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
          label={'Connection Name'}
        />
        <ListForm
          label={'Database Type'}
          options={dbOptions}
          selectedValue={formData.databaseType}
          onChange={handleDbChange}
        />
        <ConnectionTab tab={tab} onTabChange={handleTab} />
        {parameterOpen && (
          <>
            <div className="connection-url">
              <Form
                onChange={(e) => handleChange('hostName', e.target.value)}
                type={'text'}
                label={'Hostname'}
              />
              <Form
                onChange={(e) => handleChange('port', e.target.value)}
                min={1000}
                max={9999}
                type={'number'}
                label={'Port'}
              />
            </div>
            <Form
              onChange={(e) => handleChange('userName', e.target.value)}
              type={'text'}
              label={'Username'}
            />
            <Form
              onChange={(e) => handleChange('password', e.target.value)}
              type={'password'}
              label={'Password'}
            />
            <Form
              onChange={(e) => handleChange('defaultSchema', e.target.value)}
              type={'text'}
              label={'Default Schema'}
            />
            <div className="button-group">
              <button type="button" className="solid" onClick={testConnection}>
                Test Connection
              </button>
              <button type="submit" className="solid" onClick={submitForm}>
                Connect
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
                style={{ gridColumn: 4 }}
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
