import React from 'react';

import requireAdmin from '../../hoc/requireAdmin';
import Layout from '../../layout/Layout';
import './styles.css';

const Admin = ({ auth }) => {
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
