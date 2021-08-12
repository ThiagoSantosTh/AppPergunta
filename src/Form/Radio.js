import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <legend style={{ fontWeight: 'bold', fontSize: '30px' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace', fontSize: '20px' }}
        >
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
