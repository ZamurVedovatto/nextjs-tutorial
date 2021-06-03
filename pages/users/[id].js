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

const UserPage = ({ paths }) => {
  return (
    <>
      <Head>
        <title>Nextjs | User Page</title>
        <meta name="keywords" content="user"></meta>
      </Head>
      <div>
        <h1>Details Page</h1>
      </div>
    </>
  );
}

export default UserPage