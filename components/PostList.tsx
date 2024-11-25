import { PostMetadata } from '@/libs/getPost'
import PostItem from './PostItem'

const PostList = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </div>
  )
}

export default PostList
