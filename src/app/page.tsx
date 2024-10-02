import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiSubstack } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="bg-gray-950 py-12 px-20 rounded-3xl  shadow-slate-700 shadow-xl">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl text-teal-50 opacity-80 font-bold">
            Yep aquí mrjark, pero en offline me dicen Chema
          </h1>
          <article className=" flex flex-row items-center justify-center gap-6">
            <Image
              className="flex rounded-full"
              alt="mrjark - chema ferrandez photo profile"
              src="https://unavatar.io/github/immrjark"
              about="mrjark photo"
              width={200}
              height={200}
            />
            <section className="flex flex-col gap-5">
              <h2 className="text-3xl text-white">
                Fanático de Growth, las Startup y el Tattoo
              </h2>
              <h3 className="text-xl">
                Esta página es una preview a mi blog el cual está en
                construcción aunque no te voy a engañar, hay ciertas partes de
                la ideación que aún estoy trabajando en ella 😅
              </h3>
              <p className="text-md text-zinc-400">
                Si quieres contactarme, te dejo mis redes por aquí. Y si quieres
                saber más sobre cómo voy haciendo las cosas, en Substack me
                puedes encontrar escribiendo sobre mi día a día y la preview de
                este blog
              </p>
            </section>
          </article>
        </div>
        <div className="flex justify-center pt-10 gap-8">
          <Link
            href="https://substack.com/@mrjark"
            className="flex justify-center content-center items-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <SiSubstack className="text-white text-xl" />
            Substack
          </Link>
          <Link
            href="https://linkedin.com/in/chemaferrandez"
            className="flex justify-center content-center items-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillLinkedin className="text-white text-2xl" />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/immrjark/"
            className="flex justify-center content-center items-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillInstagram className="text-white text-2xl" />
            Instagram
          </Link>
          <Link
            href="https://github.com/immrJark"
            className="flex justify-center content-center items-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillGithub className="text-white text-2xl" />
            GitHub
          </Link>
          <Link
            href="./mrjark"
            className="flex justify-center content-center items-center gap-2 text-lg italic font-medium text-purple-200 opacity-50 hover:underline"
          >
            <Image
              src="mrjark.svg"
              alt="logo de mrjark"
              width={24}
              height={24}
            />
            mrjark.com (in progress)
          </Link>
        </div>
        <div className=" lg:hidden md:hidden sm:visible">
          <p className="text-center text-lg mt-5 text-slate-400">
            Lo sé, no es responsive
          </p>
          <span className="flex text-center flex-col">🙄</span>
        </div>
      </div>
    </main>
  );
}
