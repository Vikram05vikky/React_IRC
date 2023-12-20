import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserid } from "../Services/api";

function Edituser() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  const fetchUser = async () => {
    try {
      const res = await getUserid(id);
      setdata(res.data);
      // fetchUser();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await editUser(id, data);
      if (res.status === 200) alert("User Updated");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          value={data.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          value={data.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Update"
          className="submit-btn"
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default Edituser;
