import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="bg-gray-950 py-12 px-20 rounded-3xl  shadow-slate-700 shadow-xl">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl text-teal-50 opacity-80 font-bold">
            Hola soy Chema aka mrjark por las redes 🙋🏽‍♂️
          </h1>
          <article className=" flex flex-row items-center justify-center gap-6">
            <Image
              className="flex rounded-full"
              alt="mrjark - chema ferrandez photo profile"
              src="https://unavatar.io/github/mrjark"
              about="mrjark photo"
              width={200}
              height={200}
            />
            <section className="flex flex-col gap-5">
              <h2 className="text-3xl text-white">
                Fanático de Growth y las Startup 🦄
              </h2>
              <h3 className="text-xl">
                Esta página es una preview a mi blog el cual está en
                construcción aunque no te voy a engañar, hay ciertas partes de
                la ideación que aún estoy trabajando en ella 😅
              </h3>
              <p className="text-md text-zinc-400">
                Si quieres contactarme, te dejo mi LinkedIn por aquí abajo, que
                es donde estoy más activo.
              </p>
            </section>
          </article>
        </div>
        <div className="flex justify-center pt-10 gap-8">
          <Link
            href="https://linkedin.com/in/immrjark"
            className="flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillLinkedin className="text-white text-2xl" />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/immrjark/"
            className="flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillInstagram className="text-white text-2xl" />
            Instagram
          </Link>
          <Link
            href="https://github.com/immrJark"
            className="flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 hover:underline"
          >
            <AiFillGithub className="text-white text-2xl" />
            GitHub
          </Link>
          <Link
            href="./mrjark"
            className="flex justify-center content-center gap-2 text-lg italic font-medium text-purple-200 opacity-50 hover:underline"
          >
            <Image
              src="mrjark.svg"
              alt="logo de mrjark"
              width={24}
              height={24}
            />
            mrjark.com (in progres)
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
