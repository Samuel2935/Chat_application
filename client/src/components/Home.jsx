

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({socket}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };
  return (
<div className='bg-slate-200'>
<form className="home__container max-w-md mx-auto bg-emerald-500 text-white  " onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder='Type username...'
        minLength={6}
        name="username"
        id="username"
        className="username__input outline-none rounded-md"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta bg-blue-500 w-56 mt-4 p-2 hover:bg-blue-400 text-white">SIGN IN</button>
      <p>Have no account? <span className='text-yellow-400'><Link to="/chat">sign up</Link></span></p>
    </form>
</div>
  );
};

export default Home;