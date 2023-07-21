import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://reqres.in/api/users?page=1';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="brand">ZARA</div>
        <button onClick={getUsers}>Get Users</button>
      </nav>
      <div className="card-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
