import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Quote } from "../components/Quote"

const Backend_url = import.meta.env.VITE_BACKEND_URL;
export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // return (
    //   <div>
    //     <div className="grid grid-cols-1 lg:grid-cols-2">
    //       <div className="sign-up">
    //         <div className="bg-slate-300 h-screen flex justify-center">
    //           <div className="flex flex-col justify-center">
    //             <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
    //               <Heading label={"Sign up"} />
    //               <SubHeading label={"Enter your information to create an account"} />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setFirstName(e.target.value);
    //                 }}
    //                 placeholder="John"
    //                 label={"First Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setLastName(e.target.value);
    //                 }}
    //                 placeholder="Doe"
    //                 label={"Last Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setUsername(e.target.value);
    //                 }}
    //                 placeholder="dharya@gmail.com"
    //                 label={"Email"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                 }}
    //                 placeholder="123456"
    //                 label={"Password"}
    //               />
    //               <div className="pt-4">
    //                 <Button
    //                   onClick={async () => {
    //                     const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
    //                       username: username,
    //                       firstName: firstName,
    //                       lastName: lastName,
    //                       password: password
    //                     });
    //                     localStorage.setItem("token", response.data.token);
    //                     navigate("/dashboard");
    //                   }}
    //                   label={"Sign up"}
    //                 />
    //               </div>
    //               <BottomWarning
    //                 label={"Already have an account?"}
    //                 buttonText={"Sign in"}
    //                 to={"/signin"}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="hidden lg:block">
    //         <Quote></Quote>
    //       </div>
    //     </div>
    //   </div>
    // );
    // return (
    //   <div>
    //     <div className="grid grid-cols-1 lg:grid-cols-2">
    //       <div className="sign-up">
    //         <div className="bg-gradient-to-br from-green-200 to-blue-300 h-screen flex justify-center">
    //           <div className="flex flex-col justify-center">
    //             <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
    //               <Heading label={"Sign up"} />
    //               <SubHeading label={"Enter your information to create an account"} />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setFirstName(e.target.value);
    //                 }}
    //                 placeholder="John"
    //                 label={"First Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setLastName(e.target.value);
    //                 }}
    //                 placeholder="Doe"
    //                 label={"Last Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setUsername(e.target.value);
    //                 }}
    //                 placeholder="dharya@gmail.com"
    //                 label={"Email"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                 }}
    //                 placeholder="123456"
    //                 label={"Password"}
    //               />
    //               <div className="pt-4">
    //                 <Button
    //                   onClick={async () => {
    //                     const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
    //                       username: username,
    //                       firstName: firstName,
    //                       lastName: lastName,
    //                       password: password
    //                     });
    //                     localStorage.setItem("token", response.data.token);
    //                     navigate("/dashboard");
    //                   }}
    //                   label={"Sign up"}
    //                 />
    //               </div>
    //               <BottomWarning
    //                 label={"Already have an account?"}
    //                 buttonText={"Sign in"}
    //                 to={"/signin"}
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

    // this looks good 
    // return (
    //   <div>
    //     <div className="grid grid-cols-1 lg:grid-cols-2">
    //       <div className="sign-up">
    //         <div className="bg-gradient-to-br from-green-200 to-blue-300 h-screen flex justify-center">
    //           <div className="flex flex-col justify-center">
    //             <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
    //               <Heading label={"Sign up"} />
    //               <SubHeading label={"Enter your information to create an account"} />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setFirstName(e.target.value);
    //                 }}
    //                 placeholder="John"
    //                 label={"First Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setLastName(e.target.value);
    //                 }}
    //                 placeholder="Doe"
    //                 label={"Last Name"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setUsername(e.target.value);
    //                 }}
    //                 placeholder="dharya@gmail.com"
    //                 label={"Email"}
    //               />
    //               <InputBox
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                 }}
    //                 placeholder="123456"
    //                 label={"Password"}
    //               />
    //               <div className="pt-4">
    //                 <Button
    //                   onClick={async () => {
    //                     const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
    //                       username: username,
    //                       firstName: firstName,
    //                       lastName: lastName,
    //                       password: password
    //                     });
    //                     localStorage.setItem("token", response.data.token);
    //                     navigate("/dashboard");
    //                   }}
    //                   label={"Sign up"}
    //                 />
    //               </div>
    //               <BottomWarning
    //                 label={"Already have an account?"}
    //                 buttonText={"Sign in"}
    //                 to={"/signin"}
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
          <div className="sign-up">
            <div className="bg-gradient-to-br from-[#7aeda2] to-[#77b6fd] h-screen flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
                  <Heading label={"Sign up"} className="text-gray-900" />
                  <SubHeading label={"Enter your information to create an account"} className="text-gray-600" />
                  <InputBox
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    placeholder="First Name"
                    label={"First Name"}
                  />
                  <InputBox
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="Last Name"
                    label={"Last Name"}
                  />
                  <InputBox
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    placeholder="dharya@gmail.com"
                    label={"Email"}
                  />
                  <InputBox
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="123456"
                    label={"Password"}
                  />
                  <div className="pt-4">
                    <Button
                      onClick={async () => {
                        const response = await axios.post(Backend_url+"/api/v1/user/signup", {
                          username: username,
                          firstName: firstName,
                          lastName: lastName,
                          password: password
                        });
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                      }}
                      label={"Sign up"}
                    />
                  </div>
                  <BottomWarning
                    label={"Already have an account?"}
                    buttonText={"Sign in"}
                    to={"/signin"}
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
