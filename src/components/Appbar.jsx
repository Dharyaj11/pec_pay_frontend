// export const Appbar = () => {
//     return <div className="shadow h-14 flex justify-between">
//         <div className="flex flex-col justify-center h-full ml-4">
//             PayTM App
//         </div>
//         <div className="flex">
//             <div className="flex flex-col justify-center h-full mr-4">
//                 Hello
//             </div>
//             <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
//                 <div className="flex flex-col justify-center h-full text-xl">
//                     U
//                 </div>
//             </div>
//         </div>
//     </div>
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Backend_url = import.meta.env.VITE_BACKEND_URL;
export const Appbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists in local storage
    if (!userToken) {
      navigate("/signin"); // Redirect to sign-in page if token doesn't exist
    } else {
      axios
        .get(Backend_url+"/api/v1/user/getUser", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setUser(response.data);
        });
    }
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="shadow h-14 flex justify-between items-center md:px-10">
      <Link to={"/dashboard"}>
        <div className="flex flex-col justify-center h-full ml-4 font-bold">
          PecPay App
        </div>
      </Link>
      <div className="flex items-center justify-center gap-2 p-20px">
        <Button label={"Sign Out"} onClick={signOutHandler} />
        <div className="flex flex-col justify-center h-full mr-4">
          {user?.firstName}
        </div>
        <div className="rounded-full h-10 w-10 p-4 bg-slate-200 flex justify-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user?.firstName[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};