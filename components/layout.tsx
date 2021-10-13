import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,500;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app h-100">
        <div className="container p-0">
          <div className="app-wrapper  bg-image ">
            <div className="app-body flex-column">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}