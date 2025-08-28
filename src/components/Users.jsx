import {useEffect, useState} from 'react';
import axios from 'axios';
import { API_URL } from '../constants.js'

export function Users() {
  const [users, setUser] = useState('');

  useEffect(() => {
    axios.get(API_URL+'/users')
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
  }, []);

  return (
      <div>
        <h2>Clients</h2>
        <ul>
          {users.map((users) => (
              <li id={users.id}>
                {users.name}
              </li>
          ))}
        </ul>
      </div>
  );
}