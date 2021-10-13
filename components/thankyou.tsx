import React, { ReactElement } from 'react'
import Layout from '../components/layout'

export default function ThankYou() {
  return (
    <>
      <div className="position-relative">
        <div className="thankyou-btn  slide ">
          <button type="button" className=" d-flex text-white align-items-center justify-content-center btn-primary btn mx-auto">THANK YOU!</button>
        </div>
        <p className="mb-0  text-white text-center thank-page-text ">We will contact you shortly.</p>
        </div>
    </>
  )
}

ThankYou.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
