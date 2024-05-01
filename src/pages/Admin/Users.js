import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const Users = () => {
  // Dummy user details for demonstration
  const user = {
    email: 'user@user.com',
    password: '123456'
  };

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu/>
          </div>
          <div className='col-md-9'>
            <h1>All Users</h1>
            <div>
              <h3>User Details:</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
