import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Blog does not exist!</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
