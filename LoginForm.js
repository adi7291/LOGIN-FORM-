import React from "react";

import "./loginform.css";
export default function LoginForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoining: false,
  });

//   const handleChange = (e) => {
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
const handleChange =(event)=>{
    const {name ,type,checked,value}= event.target

    setFormData(prevFormData=>{
        return{
            ...prevFormData ,
            [name]:type==="checkbox" ? checked :value
        }
    })
}
const handleSubmit=(e)=>{
    // e.prventDefault()
    e.preventDefault()
    alert(formData.confirmPassword===formData.password ?"You are Signed Up": "password do not match")
    alert(formData.isJoining ?"Thanks for Subscribing":"You have not subscribe for news letter")
    console.log(formData)
}
 
  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="User Name(email)"
            className="form-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />

          <input
            type="password"
            placeholder="password"
            className="form-input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />

          <div className="checkbox">
            <input
              type="checkbox"
              id="join"
              name="isJoining"
              onChange={handleChange}
              checked={formData.isJoining}
            />
            <label htmlFor="join">I want to join the news letter</label>
          </div>
          <button className="form--button">Sign Up</button>
        </form>
      </div>
    </>
  );
}
