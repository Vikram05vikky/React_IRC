import { useRef, useState } from "react";
import "../Assets/Form.css";
export default function Form() {
  const userInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const cpasswordInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const ageInputRef = useRef(0);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    cpassword: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: userInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      cpassword: cpasswordInputRef.current.value,
      age: ageInputRef.current.value,
    };
    console.log(formData);

    if (formData.username.length === 0) {
      setErrors({ ...errors, username: "Fill the username" });
    } else if (formData.username.length < 6) {
      setErrors({
        ...errors,
        username: "Username must be minimum 6 characters",
      });
    } else if (formData.email === "") {
      setErrors({ ...errors, email: "Fill the email field" });
    } else if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: "Invalid email" });
    } else if (formData.password !== "" && formData.cpassword !== "") {
      let a = document.getElementById("password").value;
      let b = document.getElementById("cpassword").value;

      if (a === b) {
        alert("Password matched ! Register Successful");
      } else {
        alert("Password not matched !");
      }
    } else if (formData.password === "") {
      setErrors({ ...errors, password: "Fill the password" });
    } else if (formData.cpassword === "") {
      setErrors({ ...errors, cpassword: "Fill the confirm password" });
    } else if (formData.age < 10 && formData.age > 90) {
      setErrors({ ...errors, age: "Age must be between 10 to 90" });
    } else {
      setErrors({ ...errors, username: "", password: "" });
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="">
          <h1>Register</h1>
          <form className="auth-container" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              ref={userInputRef}
              placeholder="Username"
            />
            {errors.username === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.username}</span>
            )}
            <input
              type="text"
              id="email"
              ref={emailInputRef}
              placeholder="Email"
            />
            {errors.email === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.email}</span>
            )}
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              placeholder="Password"
            />
            {errors.password === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.password}</span>
            )}
            <input
              type="password"
              id="cpassword"
              ref={cpasswordInputRef}
              placeholder="Confirm Password"
            />
            {errors.cpassword === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.cpassword}</span>
            )}
            <input
              type="number"
              id="age"
              ref={ageInputRef}
              placeholder="Enter Age"
            />
            {errors.age === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.age}</span>
            )}
            <span className="btn-container">
              <input type="submit" value="Register" className="auth-btn w-50" />
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
