import Image from 'next/image'
import Link from 'next/link'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className='bg-gray-950 py-12 px-20 rounded-3xl  shadow-slate-700 shadow-xl'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 
            className='text-5xl text-teal-50 opacity-80 font-bold'
          >Hello, I´m MrJark 🙋🏽‍♂️</h1>
          <div className=' flex flex-row items-center justify-center gap-6'>
            <Image 
              className='flex rounded-full'
              alt='mrjark - chema ferrandez photo profile'
              src='https://unavatar.io/github/mrjark'
              about='mrjark photo'
              width={200}
              height={200}
            />
            <h2 className='text-2xl text-white'>
              Fanático las Startup. <br />Exploro, aprendo y comparto píldoras sobre <strong className='text-teal-400 italic'>Growth</strong>, <strong className='text-blue-400 italic'>Behavioural</strong> & <strong className='text-orange-400 italic'>Development</strong> en mis redes y blog
            </h2>

          </div>
        </div>
        <div className='flex justify-center pt-10 gap-8'>
          <Link 
            href='https://linkedin.com/in/mrjark'
            className='flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline'
          >
            <AiFillLinkedin className = 'text-white text-2xl'/>
            LinkedIn
          </Link>
          <Link 
            href='https://www.instagram.com/mrjark_/'
            className='flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline'
          >
            <AiFillInstagram className = 'text-white text-2xl'/>
            Instagram
          </Link>
          <Link 
            href='https://github.com/MrJark'
            className='flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline'
          >
            <AiFillGithub className = 'text-white text-2xl'/>
            GitHub
          </Link>
          <Link 
            href='#'
            className='flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 opacity-50 hover:underline'
          >
            <Image src='mrjark.svg' alt='logo de mrjark' width={24} height={24} />
            mrjark.com (in progres)
          </Link>
        </div>
      </div>
    </main>
  )
}
