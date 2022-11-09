import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone)

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">
          <FontAwesomeIcon className="footer-icon" icon={faFacebookF} />
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
          <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
        </div>{' '}
        <div>
          <p className="copyright">
            © {year} Tomas Alves de Souza
            <FontAwesomeIcon className="footer-icon" icon="phone" />
            022 080 3055
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
