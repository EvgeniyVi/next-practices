'use client'

import Link from 'next/link'
import './style.scss'
import DarkModeToggle from '@/app/components/DarkModeToggle/DarkModeToggle'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

function Navbar() {
  return (
    <nav className="container__nav">
      <Link href="/" className="logo">
        MyApp
      </Link>
      <div className="links">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
          type="button"
          className="logout"
          onClick={() => console.log('hello')}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
