import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax';
import alanBtn from '@alan-ai/alan-sdk-web';

import Layout from '../../layout/Layout';
import MessageList from '../../components/MessageList/MessageList';
import MessageForm from '../../components/MessageForm/MessageForm';
import { reseedDatabase } from '../../store/actions/authActions';
import background from './background.jpg';
import Button from '../../components/Button/Button';

import './styles.css';

const Home = ({ auth, reseedDatabase }) => {
  const handleReseed = () => {
    reseedDatabase();
  };

  useEffect(() => {
    alanBtn({
      key: '4269cbaee8fdcc81ffe76d73a2cff96d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'homePage') {
          window.location = '/';
        } else if (command === 'usersPage') {
          window.location = '/users';
        } else if (command === 'profilePage') {
          window.location = `/${auth.me.username}`;
        } else if (command === 'adminPage') {
          if (auth.me?.role === 'ADMIN') {
            window.location = '/admin';
          }
        } else if (command === 'chatPage') {
          window.location = '/chat';
        }
      },
    });
  }, []);

  return (
    <Layout>
      <div className="home-page">
        {!auth.isAuthenticated ? (
          <div>
            <div className="cover">
              <Parallax blur={5} bgImage={background} bgImageAlt="Background Image" strength={200}>
                <div className="parallax">
                  <h2>
                    Welcome <span>guest</span>!
                    <Button />
                  </h2>
                </div>
              </Parallax>
            </div>
          </div>
        ) : (
          <>
            <div className="cover">
              <Parallax blur={5} bgImage={background} bgImageAlt="Background Image" strength={200}>
                <div className="parallax">
                  <h2>
                    Welcome <span>{auth.me.name}</span>!
                    <Button />
                  </h2>
                </div>
              </Parallax>
            </div>
            <MessageForm />
          </>
        )}
        <MessageList />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { reseedDatabase }))(Home);
