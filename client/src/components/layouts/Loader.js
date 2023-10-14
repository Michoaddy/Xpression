import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PulseLoader color="#800080" size={20} margin={10} />
        <h2 style={{ color: '#800080', marginTop: '20px', fontWeight: 'bold' }}>X-pression</h2>
      </div>
    </div>
  );
};

export default Loader;
