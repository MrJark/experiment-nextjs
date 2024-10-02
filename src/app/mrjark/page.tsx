import Image from "next/image";
import Link from "next/link";

export default function Mrjark() {
  return (
    <main className="flex flex-col min-h-screen w-screen items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center w-2/3 h-80 bg-zinc-500 rounded-3xl shadow-lg shadow-zinc-400">
        <Image
          className="flex mb-11"
          alt="mrjark logo"
          src="/mrjark.svg"
          about="mrjark logo"
          width={50}
          height={50}
        />
        <h1 className=" font-bold mb-8 text-4xl">W.I.P.</h1>
        <Link
          className="rounded-full text-zinc-300 italic bg-zinc-900 cursor-pointer px-6 py-1 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-zinc-200"
          href="/"
        >
          Go Back
        </Link>
        <div className=" lg:hidden md:hidden sm:visible">
          <p className="text-center text-lg mt-5 text-slate-100">
            No, tampoco es responsive
          </p>
          <span className="flex text-center flex-col">🙄</span>
        </div>
      </div>
    </main>
  );
}
