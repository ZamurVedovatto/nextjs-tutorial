import Head from 'next/head'
import styles from './../../styles/Users.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  
  return {
    props: {
      users: data
    }
  }
}

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Nextjs | Users</title>
        <meta name="keywords" content="users"></meta>
      </Head>
    <div>
      <h1>All users</h1>
      {users?.map(user => (
        <div key={user.id}>
          <a className={styles.single}>
            <p>{user.name}</p>
          </a>
        </div>
      ))}
    </div>
    </>
  );
}

export default Users