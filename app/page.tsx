import PostList from '@/components/PostList'
import { getPosts } from '@/libs/getPost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VMB Blogs',
}

const HomePage = async () => {
  const posts = getPosts()

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default HomePage
