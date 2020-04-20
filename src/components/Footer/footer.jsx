import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css'

const Footer = () => {
  return (

    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">


        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="decor btn-floating btn-fb mx-1">
              <FontAwesomeIcon
                icon="envelope"
              />
            </a>

          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <FontAwesomeIcon
                icon={['fab', 'facebook-f']}
              />
            </a>

          </li>
          <li className="list-inline-item">
            <a className="decor btn-floating btn-gplus mx-1" href="https://www.linkedin.com/in/aniket-mahangade-193b21130">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <FontAwesomeIcon
                icon={["fab", "google"]}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1" href="https://api.whatsapp.com/send?phone=+917058309714">
              <FontAwesomeIcon
                icon={["fab", "whatsapp"]}
              />
            </a>
          </li>
        </ul>


      </div>

      <div className="footer-copyright text-center py-3">© 2020 Copyright:
      
    <a href="https://github.com/Aniket242424/" hidden> ContestPlaza</a>
      </div>


    </footer>

  )
}

export default Footer;



