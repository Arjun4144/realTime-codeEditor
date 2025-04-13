import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id=uuidv4();
    setRoomId(id);
    toast.success('Created a new room');

  }
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homePageLogo' src='/CodeIt-logo.png' alt='CodeIt-logo' />
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId} />

          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME' 
            onChange={(e) => setUsername(e.target.value)}
            value={username}/>

          <button className='btn joinBtn'>Join</button>
          <span className='createInfo'>
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href='/' className='createNewBtn'>new room</a>
          </span>
        </div>
      </div>
      <footer className='footer'>
        <h4>Built by CodeIt</h4>
      </footer>
    </div>
  )
}

export default Home
