import Link from 'next/link'
import './style.scss'

function Portfolio() {
  return (
    <div className="container">
      <h1 className="selectTitle">Choose a gallery</h1>
      <div className="items">
        <Link href="/portfolio/illustrations" className="item">
          <span className="title">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="item">
          <span className="title">Websites</span>
        </Link>
        <Link href="/portfolio/applications" className="item">
          <span className="title">Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
