import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { User } from '../../types/user'; // Make sure you have a User type

interface UserPageProps {
  users: User[];
  removeUser: (userId: number) => void;
}

const UserPage: React.FC<UserPageProps> = ({ users, removeUser }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'password',
        dataIndex: 'password',
        key: 'password',
      },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: User) => (
        <div>
          <Link to={`/admin/user/update/${record.id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Button onClick={() => onHandleRemove(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const onHandleRemove = (id: number) => {
    console.log("User: ", id);
    removeUser(id);
  };

  const data = users.map((item, index) => ({ ...item, key: index + 1 }));
  return (
    <div>
      <Link to="/admin/user/add">
        <Button type="primary">Add New User</Button>
      </Link>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserPage;
