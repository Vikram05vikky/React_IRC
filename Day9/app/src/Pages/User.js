import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../Services/api";
import "../Pages/core.css";
import { useNavigate } from "react-router-dom";
function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getUser();
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdd = () => navigate("/add");

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res.status === 200) alert("deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd} className="edit-btn">
        Add User
      </button>
    </>
  );
}

export default User;
