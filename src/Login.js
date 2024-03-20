import { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [sub, setSub] = useState(false);
  const [mailerr, setMailerr] = useState(false);
  const [done, setDone] = useState(false);
  const submite = async (e) => {
    e.preventDefault();
    setSub(true);
    let flag = false;
    if (email === "" || pass === "") {
      flag = false;
    } else flag = true;
    if (flag) {
      try {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location = "/";
        }
      } catch (err) {
        setDone(false);

        if (err.response && err.response.status === 401) {
          // Handle validation error (for example, email already taken)
          setMailerr(true);
        } else {
          console.error(err);
        }
      }
    }
  };
  return (
<div>
<Header/>

    <div
      style={{
        width: "60%",
        margin: "0px auto",
      }}
    >
      <form onSubmit={submite} method="post">
        <div className="container">
          {mailerr && (
            <p style={{ color: "red" }}>the information is wrong ! </p>
          )}
          <label htmlFor="uname">
            <b>email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button type="submit" style={{ textAlign: "center" }}>
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Login;
