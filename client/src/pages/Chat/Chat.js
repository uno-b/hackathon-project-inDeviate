import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Chatroom from '../../components/Chatroom/Chatroom';

const Chat = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={Home} />
        <Route exact path="/chat/:roomId" component={Chatroom} />
      </Switch>
    </Router>
  );
};

export default Chat;
