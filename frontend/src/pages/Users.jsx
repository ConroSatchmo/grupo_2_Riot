import React from "react";
import Item2 from "../components/Item2";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const users = await fetchData("users");
      setUsers(users.data);
      setLoading(false);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/api/users`);
    const data = await response.json();
    return data;
  };

  const lastUser = users[users.length - 1];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <h2 className="text-center fs-1">
          <span className="badge bg-dark">Último creado</span>
        </h2>
        <div className="col-md-6 mt-4 mb-5 text-center">
          {!loading ? (
            <Item2 {...lastUser} />
          ) : (
            <div
              className="spinner-border m-5"
              role="status"
              style={{ width: "10rem", height: "10rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <h3 className="text-center fs-1 mb-5 mt-4">
          <span className="badge bg-dark">Todos los usuarios</span>
        </h3>
        {!loading ? (
          users.map((user) => (
            <div key={user.id} className="col-md-6">
              <Item2 key={user.id} {...user} />
            </div>
          ))
        ) : (
          <div
            className="spinner-border m-5"
            role="status"
            style={{ width: "10rem", height: "10rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
