import React, { useEffect, useState } from 'react';
import { useUserData } from '~/hooks/useUserData';

const EditableForm: React.FC = () => {

  const { userData, updateStatus, updateUserData } = useUserData();

  const [formData, setFormData] = useState(userData);


  useEffect(() => {
    setFormData(userData)
  }, [userData])



  const handleChange = (field: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (formData !== null) {
      updateUserData(formData).catch((error) => {
        console.log(error)
      });
      console.log('Data saved:', formData);
    }
  };

  return (

    <div className="max-w-md mx-auto p-4 mt-5 bg-white bg-gradient-to-b from-[#78ABF4] to-[#ffcfd2] ">
      {formData && (
        <div className="space-y-4">
          <InputField label="email" value={formData.email || ""} type="email" placeholder="exemple@monmail.com" onChange={value => handleChange('email', value)} />
          <InputField label="Nom" value={formData.name || ""} type="text" placeholder="Paris" onChange={value => handleChange('name', value)} />
          <InputField label="Prénom" value={formData.firstname || ""} type="text" placeholder="Henri" onChange={value => handleChange('firstname', value)} />
          <InputField label="Adresse" value={formData.streetAddress || ""} placeholder="12 rue des fleurs" type="text" onChange={value => handleChange('streetAddress', value)} />
          <InputField label="Ville" value={formData.addresseCity || ""} type="text" placeholder="Paris" onChange={value => handleChange('addresseCity', value)} />
          <InputField label="Code postal" value={formData.postalCode || ""} type="number" placeholder="75001" onChange={value => handleChange('postalCode', value)} />
        </div>
      )}

      <button
        onClick={handleSave}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow"
      >
        Enregistrer
      </button>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, type, placeholder, onChange }) => {
  return (
    <div>
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
      />
    </div>
  );
};

export default EditableForm;
