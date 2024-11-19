// components/header/page.js
import Link from "next/link";
import React from 'react'

function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
    <div className="max-w-6xl mx-auto flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </div>
  </header>
  )
}

export default Header;
