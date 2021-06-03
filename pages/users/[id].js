import Head from 'next/head'

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()

  return {
    props: {
      user: data
    }
  }
}

const UserPage = ({ user }) => {
  return (
    <>
      <Head>
        <title>Nextjs | {user.name}</title>
        <meta name="keywords" content="users"></meta>
      </Head>
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
    </>
  );
}

export default UserPage