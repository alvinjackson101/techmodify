import React, { ReactElement, useState } from 'react'
import Layout from '../components/layout'

type ContactProps = {
  onContacted: (text: string) => void
};

const encode = (data: { [key:string]: string}) => {
  return Object.keys(data)
      .map((key: string) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default function Contact( {onContacted} : ContactProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    let data = {
        name,
        email,
        message,
        phone,
    }

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    }).then((res) => {
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
        setLoading(false)

        onContacted('thankyou');
    })
  }


  return (
    <>
      <div className="app-form">
        <form autoComplete="off" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
          <div className="row">
            <div className="col-md-12">
              <div className="form-field">
                <input type="text" className="form-control" id="name" aria-describedby="name"
                  placeholder="Name or Company" onChange={(e)=>{setName(e.target.value)}}/>
              </div>
            </div>
          </div>
          <div className="row g-0 d-flex justify-content-between
                           ">
            <div className="col-md-7 col-6 col-left ">
              <div className="form-field">
                <input type="text" className="form-control" id="email" aria-describedby="email"
                  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
            </div>
            <div className="col-md-5 col-6 col-right">
              <div className="form-field">
                <input type="text" className="form-control" id="phone" aria-describedby="Phone"
                  placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-field mb-0">
                <textarea className="form-control" placeholder="What do you want to build?" id="text-area" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </div>
            </div>
          </div>
          <button type='submit' className="d-flex align-items-center justify-content-center btn-primary btn mx-auto" disabled={loading}>{loading ? 'Loading...' : 'Let’s Connect'}</button>
        </form>
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
