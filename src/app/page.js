'use client'

import './style.scss'
import Image from 'next/image'
import Hero from '../../public/hero.png'
import Button from './components/Button/Button'
import useRedirect from './hooks/useRedirect'

export default function Home() {
  const { redirectToUrl } = useRedirect()
  return (
    <main className="container__main">
      <div className="item__home">
        <h1 className="title__home">The Future of AI in the next few years</h1>
        <p className="desc__home">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button
          text="See our works"
          className="button-redirect"
          onClick={(e) => redirectToUrl('/portfolio')}
        />
      </div>
      <div className="item__home">
        <Image src={Hero} alt="main" className="img__home" />
      </div>
    </main>
  )
}
