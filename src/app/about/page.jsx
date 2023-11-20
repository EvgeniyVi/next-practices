'use client'

import Image from 'next/image'
import Button from '../components/Button/Button'
import './style.scss'
import useRedirect from '../hooks/useRedirect'
import { imgLoader } from '../utils/helpers'
import { aboutImage } from '../constants'

function About() {
  const { redirectToUrl } = useRedirect()
  return (
    <div>
      <div className="imgContainer__about">
        <Image
          src={aboutImage}
          fill
          loader={() => imgLoader(aboutImage)}
          alt="about us"
          className="img__about"
        />
        <div className="imgText__about">
          <h1 className="imgTitle__about">Lorem ipsum dolor sit</h1>
          <h2 className="imgDesc__about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className="textContainer__about">
        <div className="item__about">
          <h1 className="title__about">Who Are We?</h1>
          <p className="desc__about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className="item__about">
          <h1 className="title__about">What We Do?</h1>
          <p className="desc__about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button
            onClick={() => redirectToUrl('/contact')}
            text="Contact"
            className="button-redirect__about"
          />
        </div>
      </div>
    </div>
  )
}

export default About
