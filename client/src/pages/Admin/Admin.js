import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import requireAdmin from '../../hoc/requireAdmin';
import Layout from '../../layout/Layout';
import './styles.css';

const Admin = ({ auth }) => {
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
        }
      },
    });
  }, []);

  return (
    <Layout>
      <div className="admin-page">
        <h1>Admin dashboard</h1>
        <p>This is the Admin page. Only the Admin can access this page.</p>
      </div>
    </Layout>
  );
};

export default requireAdmin(Admin);
