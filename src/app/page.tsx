"use client"
import Link from "next/link"

export default function Home() {
  return (
    <section className="max-w-full min-h-screen p-12">
      <header className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold">NotesKit</h1>
        <Link href="/dashboard">Get Started</Link >
      </header>
    </section>
  )
}
