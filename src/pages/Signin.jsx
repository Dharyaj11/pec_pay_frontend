// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { SubHeading } from "../components/SubHeading"

// export const Signin = () => {
//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign in"} />
//         <SubHeading label={"Enter your credentials to access your account"} />
//         <InputBox placeholder="dharya@gmail.com" label={"Email"} />
//         <InputBox placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button label={"Sign in"} />
//         </div>
//         <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
//       </div>
//     </div>
//   </div>
// }
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useEffect, useState } from "react";
import axios from "axios";
import { Quote } from "../components/Quote";
const Backend_url = import.meta.env.VITE_BACKEND_URL;
export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists in local storage
    if (userToken) {
      navigate("/dashboard"); // Redirect to sign-in page if token doesn't exist
    }
  }, []);

  // return (
  //   <div>
  //       <div className="grid gird-cols-1 lg: grid-cols-2">
  //         <div className="sign-in">
  //         <div className="bg-slate-300 h-screen flex justify-center">
  //     <div className="flex flex-col justify-center">
  //       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
  //         <Heading label={"Sign in"} />
  //         <SubHeading label={"Enter your credentials to access your account"} />
  //         <InputBox
  //           onChange={(e) => {
  //             setUsername(e.target.value);
  //           }}
  //           placeholder="Email"
  //           label={"Email"}
  //         />
  //         <InputBox
  //           onChange={(e) => {
  //             setPassword(e.target.value);
  //           }}
  //           placeholder="Password"
  //           label={"Password"}
  //         />
  //         <div className="pt-4">
  //           <Button
  //             onClick={async () => {
  //               const response = await axios.post(
  //                 "http://localhost:3000/api/v1/user/signin",
  //                 {
  //                   username,
  //                   password,
  //                 }
  //               );
  //               localStorage.setItem("token", response.data.token);
  //               navigate("/dashboard");
  //             }}
  //             label={"Sign in"}
  //           />
  //         </div>
  //         <BottomWarning
  //           label={"Don't have an account?"}
  //           buttonText={"Sign up"}
  //           to={"/signup"}
  //         />
  //       </div>
  //     </div>
  //   </div>
  //         </div>
  //         <div className="hidden lg:block">
  //           <Quote></Quote>
  //         </div>


  //       </div>
  //   </div>
    
  // );
  // return (
  //   <div>
  //     <div className="grid grid-cols-1 lg:grid-cols-2">
  //       <div className="sign-in">
  //         <div className="bg-slate-300 h-screen flex justify-center">
  //           <div className="flex flex-col justify-center">
  //             <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
  //               <Heading label={"Sign in"} />
  //               <SubHeading label={"Enter your credentials to access your account"} />
  //               <InputBox
  //                 onChange={(e) => {
  //                   setUsername(e.target.value);
  //                 }}
  //                 placeholder="Email"
  //                 label={"Email"}
  //               />
  //               <InputBox
  //                 onChange={(e) => {
  //                   setPassword(e.target.value);
  //                 }}
  //                 placeholder="Password"
  //                 label={"Password"}
  //               />
  //               <div className="pt-4">
  //                 <Button
  //                   onClick={async () => {
  //                     const response = await axios.post(
  //                       "http://localhost:3000/api/v1/user/signin",
  //                       {
  //                         username,
  //                         password,
  //                       }
  //                     );
  //                     localStorage.setItem("token", response.data.token);
  //                     navigate("/dashboard");
  //                   }}
  //                   label={"Sign in"}
  //                 />
  //               </div>
  //               <BottomWarning
  //                 label={"Don't have an account?"}
  //                 buttonText={"Sign up"}
  //                 to={"/signup"}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="hidden lg:block">
  //         <Quote />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="sign-in">
          <div className="bg-gradient-to-br from-[#7aeda2] to-[#77b6fd] h-screen flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} className="text-gray-900" />
                <SubHeading label={"Enter your credentials to access your account"} className="text-gray-600" />
                <InputBox
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Email"
                  label={"Email"}
                />
                <InputBox
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  label={"Password"}
                />
                <div className="pt-4">
                  <Button
                    onClick={async () => {
                      const response = await axios.post(
                        Backend_url+"/api/v1/user/signin",
                        {
                          username,
                          password,
                        }
                      );
                      localStorage.setItem("token", response.data.token);
                      navigate("/dashboard");
                    }}
                    label={"Sign in"}
                  />
                </div>
                <BottomWarning
                  label={"Don't have an account?"}
                  buttonText={"Sign up"}
                  to={"/signup"}
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};