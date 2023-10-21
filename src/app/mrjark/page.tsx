import Link from "next/link";

export default function Mrjark() {
  return(
    <main className ="flex flex-col min-h-screen w-screen items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center w-2/3 h-80 bg-slate-400 rounded-3xl shadow-lg shadow-cyan-200">
        <h1 className=" font-bold mb-8 text-4xl">W.I.P.</h1>
        <Link
          className="rounded-full text-blue-300 italic bg-blue-900 cursor-pointer px-6 py-1 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-cyan-200"
          href='/'
        >
          Go Back
        </Link>
      </div>
    </main>
  )
}