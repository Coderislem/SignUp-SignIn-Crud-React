import { useEffect, useState } from "react";
import axios from "axios";

const Form=(props)=>{
    const [Fname, setFname] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [pass, setPass] = useState("");
    const [Rpass, setRpass] = useState("");
    const [send, setSend] = useState(false);
    const [mailerr, setMailerr] = useState(false);
    const [done,setDone] = useState(false);
  useEffect(()=>{
    setEmail(props.email);
    setFname(props.name)
  },[props.email,props.name])
    const submite = async (e) => {
      e.preventDefault();
      setSend(true);
  
      let flag = true;
  
      if (Fname === "" || pass !== Rpass || pass.length < 8) {
        flag = false;
      } else {
        flag = true;
      }
  
      if (flag) {
        try {
          let res = await axios.post(`http://127.0.0.1:8000/api${props.url}`, {
            name: Fname,
            email: email,
            password: pass,
            password_confirmation: Rpass,
          }).then(()=>{
        setDone(true);
        setMailerr(false);
          }).then((r)=>{
            
          props.windowLocation &&  window.localStorage.setItem('email',email)
           window.location.pathname=`${ props.hostLocation }`  
          });
  
        } catch (err) {
         setDone(false);
  
          if (err.response && err.response.status === 422) {
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
<form action="/action_page.php" onSubmit={submite}>
 

        <label htmlFor="fname"> Name</label>
        <input
          type="text"

          id="fname"
          name="firstname"
          placeholder="Your name.."
          value={Fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <label htmlFor="lname">email</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {mailerr && send && <p style={{ color: 'red' }}>This email is already taken!</p>}
        <label htmlFor="lname">password</label>
        <input
          type="password"
          id="lname"
          name="lastname"
          placeholder="Enter your password.."
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        {send && pass.length < 8 && <p style={{ color: 'red' }} >Please create a password with at least 8 characters!</p>}
        <label htmlFor="lname"> repeat password</label>
        <input
          type="password"
          id="lname"
          name="lastname"
          placeholder="Repeat password.."
          value={Rpass}
          onChange={(e) => {
            setRpass(e.target.value);
          }}
        />
        {send && !(pass === Rpass) && <p style={{ color: 'red' }}>The passwords do not match!</p>}
        <input type="submit" value={props.button}/ >
      </form>
</div>
);

}

export default Form;