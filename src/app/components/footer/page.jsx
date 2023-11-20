import Image from 'next/image'
import './style.scss'

function Footer() {
  return (
    <footer className="container__footer">
      <div>2023 MyApp. All rights reserved</div>
      <div className="social">
        <Image
          src="/vk.png"
          width={15}
          height={15}
          className="icon"
          alt="vk.com"
        />
        <Image
          src="/inst.png"
          width={15}
          height={15}
          className="icon"
          alt="instagram"
        />
        <Image
          src="/twitter.png"
          width={15}
          height={15}
          className="icon"
          alt="twitter"
        />
        <Image
          src="/yt.png"
          width={15}
          height={15}
          className="icon"
          alt="youtube"
        />
      </div>
    </footer>
  )
}

export default Footer
