import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../layout/Layout';
import './styles.css';

const Home = () => {
  const [roomName, setRoomName] = React.useState('');

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <Layout>
      <div className="home-container">
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={handleRoomNameChange}
          className="text-input-field"
        />
        <Link to={`/chat/${roomName}`} className="enter-room-button">
          Join room
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
