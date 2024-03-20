import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form";

const UpdateUser = () => {
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Rpass, setRpass] = useState("");
  const [send, setSend] = useState(false);

  const [done, setDone] = useState(false);
  const Iduser = window.location.href.split("/").slice(-1)[0];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${Iduser}`)
      .then((respones) => respones.json())
      .then((r) => {
        setFname(r[0].name);
        setEmail(r[0].email);
      });
  }, []);

  // const submite = async (e) => {
  //   e.preventDefault();
  //   setSend(true);

  //   let flag = true;

  //   if (Fname === "" || pass !== Rpass || pass.length < 8) {
  //     flag = false;
  //   } else {
  //     flag = true;
  //   }

  //   if (flag) {
  //     try {
  //       let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${Iduser}`, {
  //         name: Fname,
  //         email: email,
  //         password: pass,
  //         password_confirmation: Rpass,
  //       }).then(()=>{
  //     setDone(true);

  //       }).then((r)=>{
  //         window.localStorage.setItem('email',email)
  //         window.location='/Dash/users';
  //       });

  //     } catch (err) {
  //      setDone(false);

  //     console.log(err)
  //     }
  //   }
  // };
  //
  return (
    <div>
      <div className="container" style={{ width: "60%" }}>
        <Form
          button="update"
          name={Fname}
          email={email}
          url={`/user/update/${Iduser}`}
          hostLocation={"/Dash/users"}
          windowLocation={false}
        />
      </div>
    </div>
  );
};

export default UpdateUser;
