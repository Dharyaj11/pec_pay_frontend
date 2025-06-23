// export function InputBox({label, placeholder, onChange}) {
//     return <div>
//       <div className="text-sm font-medium text-left py-2">
//         {label}
//       </div>
//       <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
//     </div>
// }

// import React, { useState } from 'react';

// export function InputBox({ label, placeholder, onChange }) {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <div>
//       <div className="text-sm font-medium text-left py-2">
//         {label}
//       </div>
//       <div className="relative">
//         <input
//           onChange={onChange}
//           placeholder={placeholder}
//           type={placeholder === 'Password' && !isPasswordVisible ? 'password' : 'text'}
//           className="w-full px-2 py-1 border rounded border-slate-200"
//         />
//         {placeholder === 'Password' && (
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
//           >
//             {isPasswordVisible ? 'Hide' : 'Show'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';

export function InputBox({ label, placeholder, onChange }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <div className="relative">
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={label === 'Password' && !isPasswordVisible ? 'password' : 'text'}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
        {label === 'Password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
          >
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
}

