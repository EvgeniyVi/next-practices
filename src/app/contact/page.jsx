'use client'

import Image from 'next/image'
import './style.scss'
import Button from '../components/Button/Button'
import useRedirect from '../hooks/useRedirect'

function Contact() {
  const { redirectToUrl } = useRedirect()
  return (
    <div>
      <h1 className="title__contact">Lets Keep in Touch</h1>
      <div className="content__contact">
        <div className="imgContainer__contact">
          <Image
            src="/contact.png"
            alt="contacts"
            fill
            className="image__contact"
          />
        </div>
        <form className="form__contact">
          <input type="text" placeholder="name" className="input__contact" />
          <input type="text" placeholder="email" className="input__contact" />
          <textarea
            className="textArea__contact"
            placeholder="message"
            cols="30"
            rows="10"
          />
          <Button
            onClick={() => redirectToUrl('#')}
            className="button-redirect"
            text="Send"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
