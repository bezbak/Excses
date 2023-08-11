import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';

interface User {
  id: number;
  first_name: string;
  last_name: string;
}

interface UsersProps {
  users: User[];
}

const Users: NextPage<UsersProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UsersProps> = async context => {
  // make an HTTP GET request using axios to the Reqres.in API
  const response = await axios.get('https://reqres.in/api/users');
  const users = response.data.data;

  return {
    props: {
      users
    }
  };
};

export default Users;
