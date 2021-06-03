import Link from 'next/link'

const NotFound404 = () => {
  return (
    <div className="not-found">
      <h1>oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>home</a></Link></p>
    </div>
  );
}

export default NotFound404;