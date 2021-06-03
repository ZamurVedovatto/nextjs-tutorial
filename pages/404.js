import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NotFound404 = () => {
  const router = useRouter()
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 5000);
  }, [])

  useEffect(() => {
    const countdown = () => {
      setCounter(counter - 1)
    }
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval)
  }, [counter])

  return (
    <div className="not-found">
      <h1>oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>home</a></Link></p>
      <span>You will be redirect to homepage on {counter} seconds</span>
    </div>
  );
}

export default NotFound404;