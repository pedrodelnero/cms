import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGrid } from '@material-ui/data-grid';
import { getUsers } from '../../actions/users';

const Account = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const columns = [
    { field: 'id', headerName: 'User ID', width: 100 },
    { field: 'user_email', headerName: 'User Email', width: 300 },
    { field: 'user_role', headerName: 'User Role', width: 200 },
  ];
  const rows = users.map((user) => ({ id: user.user_id, user_email: user.user_email, user_role: user.user_role }));
  //   console.log(rows);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Account;
