// export const Balance = ({ value }) => {
//     return <div className="flex">


        
//         <div className="flaex font-bold text-lg">
//             <div class="material-symbols-outlined mr-1">
//             account_balance
//             </div>
//             Your balance
//         </div>
//         <div className="font-semibold ml-4 text-lg">
            
//             Rs {value}
//         </div>
//     </div>
// }
export const Balance = ({ value }) => {
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="material-symbols-outlined text-lg mr-1">
            account_balance
          </div>
          <div className="font-bold text-lg">Your balance</div>
        </div>
        <div className="ml-4 font-semibold text-lg">Rs {value}</div>
      </div>
    );
  };