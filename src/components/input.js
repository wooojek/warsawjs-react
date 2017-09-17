import React from 'react';

const Input = ({name, type= 'text', placeholder, value, onChange, ...other}) => (
    <input name={name}
           type={type}
           placeholder={placeholder}
           value={value}
           onChange={(e) => onChange(name, e.target.value)}/>
);

export default Input;