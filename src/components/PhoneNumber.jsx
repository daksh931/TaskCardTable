// Import React and PhoneInput component
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumber = () => {
  const [phone, setPhone] = useState('');

  console.log(phone)
  return (
    <div>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={phone => setPhone(phone)}
      />
      <p>Phone Number: {phone}</p>
    </div>
  );
};

export default PhoneNumber;
