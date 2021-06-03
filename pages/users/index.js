import Head from 'next/head'
import Link from 'next/link'
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
        <Link href={`/users/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <p>{user.name}</p>
          </a>
        </Link>
      ))}
    </div>
    </>
  );
}

export default Users