import React from 'react';

export default function Button({ btnName, loginOfCalculator }) {
  return (
    <div style={{ border: '1px solid', width: 'fit-content' }}>
      <button
        onClick={() => loginOfCalculator(btnName)}
        style={{ fontSize: '30px', padding: '20px' }}
      >
        {btnName}
      </button>
    </div>
  );
}
