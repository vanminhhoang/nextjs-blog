import { PostMetadata } from '@/libs/getPost'
import Link from 'next/link'

const PostItem = ({ title, date, subtitle, slug }: PostMetadata) => {
  return (
    <Link href={`blog/${slug}`}>
      <div className="border cursor-pointer h-full border-slate-300 bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-slate-400">{date}</p>
        <p className="text-violet-600 hover:underline mb-4">{title}</p>
        <p className="text-slate-700">{subtitle}</p>
      </div>
    </Link>
  )
}

export default PostItem
