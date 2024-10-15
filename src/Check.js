// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Input फील्ड की बॉर्डर स्टेट के आधार पर बदलती है
// const Input = styled.input`
//   padding: 8px;
//   border: 2px solid ${(props) => (props.isValid ? 'green' : 'red')};
//   border-radius: 4px;
//   outline: none;
// `;

// const Check = () => {
//   const [value, setValue] = useState('');
//   const isValid = value.length >= 5;

//   return (
//     <div>
//       <Input 
//         type="text" 
//         value={value} 
//         onChange={(e) => setValue(e.target.value)} 
//         isValid={isValid} 
//       />
//     </div>
//   );
// };

// export default Check;
import React from 'react'
import './Check.css'

const Check = () => {
  return (
    <div>
      <h1> Welcome Check.js Component</h1>
      <p className='para'> it is check.js paragraph </p>
    </div>
  )
}

export default Check
