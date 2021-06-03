import styles from './../../styles/Jobs.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  
  return {
    props: {
      jobs: data
    }
  }
}

const Ninjas = ({ jobs }) => {
  return (
    <div>
      <h1>All Jobs</h1>
      {jobs?.map(job => (
        <div key={job.id}>
          <a className={styles.single}>
            <p>{job.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Ninjas