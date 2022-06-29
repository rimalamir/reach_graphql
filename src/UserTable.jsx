import ProfilePage from './ProfilePage';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import useEffectSkipInitialRender from "./useEffectSkipInitialRender";

function UserTable() {

    const routeToNextPage = () => {

    }

    const [users, setUsers] = useState([]);
  const api_call = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        console.log("Obtained response");
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network error.");
      })
      .then((response) => {
        setUsers(JSON.parse(JSON.stringify(response)));
      });
  };

  useEffectSkipInitialRender(() => {
    api_call();
  }, []);

  return (
    <div className='user-table'>
    <table>
          <thead>
            <tr>
              <td>User Name </td>
              <td>Title </td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={`tr_${user.id}`}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td><button>View profile</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
  )
}

export default UserTable