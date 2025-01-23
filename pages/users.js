import { useState } from 'react';

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/users');
    const users = await res.json();
    return { props: { users } };
}

export default function Users({ users }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });
        window.location.reload();
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}
