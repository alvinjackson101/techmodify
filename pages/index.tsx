import type { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Link from 'next/link'
import LogoText from '../components/logoText'
import Contact from '../components/contact'
import ThankYou from '../components/thankyou'

export default function Home() {
  const [state, setState] = useState('');
  const onContacted = (s: any) =>{
    setState(s);
  }
  return (
    <>
      <Head>
        <title>TechModify Your Business</title>
        <meta name="description" content="TechModify Your Business" />
      </Head>
      <div className="app-content">
        <Logo />
        <LogoText />
        {state == '' && <button
            onClick={ () => setState('contact')}
            type="button"
            className="d-flex align-items-center justify-content-center btn-primary btn mx-auto">Let’s Connect</button>}
        {state == 'contact' && <Contact  onContacted = { onContacted } />}
        {state == 'thankyou' && <ThankYou />}
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
