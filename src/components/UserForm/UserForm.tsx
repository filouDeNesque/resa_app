import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import useUserData from '~/hooks/useUserData';

const EditableForm: React.FC = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    email: session?.user.email || 'moi@nimp.com',
    name: session?.user.name || 'Jhon',
    firstname: 'Doe',
    streetAddress: '123 Main St',
    city: 'NYC',
    postalCode: '12345'
  });
  const sessionId = session?.user.id || ""
  const userData = useUserData(sessionId)

  const handleChange = (field: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement save logic here
    console.log('Data saved:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-5 bg-white bg-gradient-to-b from-[#78ABF4] to-[#ffcfd2] ">
      <div className="space-y-4">
        <InputField label="email" value={formData.email} onChange={value => handleChange('email', value)} />
        <InputField label="Nom" value={formData.name} onChange={value => handleChange('name', value)} />
        <InputField label="Prénom" value={formData.firstname} onChange={value => handleChange('firstname', value)} />
        <InputField label="Adresse" value={formData.streetAddress} onChange={value => handleChange('streetAddress', value)} />
        <InputField label="Ville" value={formData.city} onChange={value => handleChange('city', value)} />
        <InputField label="Code postal" value={formData.postalCode} onChange={value => handleChange('postalCode', value)} />
      </div>
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
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-gray-600">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
      />
    </div>
  );
};

export default EditableForm;
