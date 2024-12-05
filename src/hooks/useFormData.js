// create hook for updating form data
import { useState } from 'react';

export default function useFormData() {
    const [formData, setFormData] = useState({
        connectionName: '',
        databaseType: 'MySQL',
        hostName: '',
        port: '',
        userName: '',
        password: '',
        defaultSchema: '',
        ssl: {
            useSsl: false,
            sslKeyFile: '',
            sslCertFile: '',
            sslCaFile: '',
            sslCipher: '',
        }
    });

    const updateFormData = (key, value) => {
        if (key === 'useSsl' || key === 'sslKeyFile' ||
            key === 'sslCertFile' || key === 'sslCaFile'
            || key === 'sslCipher') {
            setFormData({
                ...formData,
                ssl: {
                    ...formData.ssl,
                    [key]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [key]: value
            });
        }
    };

    return { formData, updateFormData };
}

