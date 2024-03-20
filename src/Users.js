import { useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import {
  faUser,
  faUserPen,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Users = () => {
  const [runUseffact,setRun]=useState(0)
  const [user, setUser] = useState([]);
  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    window.location.reload();
    setRun(1);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((respones) => respones.json())
      .then((r) => setUser(r));
  }, [runUseffact]);
  
  const datashow = user.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td> <td>{user.name}</td> <td>{user.email}</td>{" "}
      <td
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link to={`${user.id}`}>
          <FontAwesomeIcon
            icon={faUserPen}
            style={{ fontSize: " 21px", color: "blue", cursor: "pointer" }}
          />
        </Link>

        <FontAwesomeIcon
          onClick={() => deleteUser(user.id)}
          icon={faUserMinus}
          style={{ color: "#bc1010", fontSize: " 21px", cursor: "pointer" }}
        />
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{datashow}</tbody>
      </table>
    </div>
  );
};
export default Users;
