"use client"

import Link from 'next/link'
import React, { Fragment } from 'react'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

  let currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> {currentYear} </span>
            <Link href="#!" scroll={false} className="text-dark fw-medium">Zeno</Link>. Designed with <span className="bi bi-heart-fill text-danger lh-1 align-middle"></span> by <Link href="https://spruko.com/" target='_blank' scroll={false}>
              <span className="fw-medium text-primary text-decoration-underline">Spruko</span>
            </Link> All rights reserved </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;