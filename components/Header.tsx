import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 p-8 my-6 flex flex-col justify-center items-center rounded-md">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <Link href="/">
          <p className="text-2xl mt-4 text-white font-bold">VMH Blog</p>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  )
}

export default Header
