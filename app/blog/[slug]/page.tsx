import Markdown from 'markdown-to-jsx'
import { getPostContent } from '@/libs/getPost'
import { getPosts } from '@/libs/getPost'
import { Metadata } from 'next'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const posts = getPosts()
  const post = posts.find((post) => post.slug === slug)

  return {
    title: post?.title,
    description: post?.subtitle,
  }
}

export const generateStaticParams = () => {
  const posts = getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getPostContent(slug)

  if (!post?.data) {
    return <h1>Blog does not exist</h1>
  }

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default BlogPage
