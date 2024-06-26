import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await login(email, password);
          navigate('/edit');
        } catch (error) {
          console.error('Error has occurred', error);
          alert('An error has occurred while logging in.');
        }
      };

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <div className="formInfo">
                    <label>
                        Email:
                        <input type="email" name="email" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="formInfo">
                    <label>
                        Password:
                        <input type="password" name="password" value={password} autoComplete="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                    <input className="button" type="submit" value="Submit" />
            </form>
            <small>Don't have an account? Register <a href={"/signup"}>here</a>.</small>
        </div>
    );
}
