import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants.js'

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(API_URL+'/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li id={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}