// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config()
import type { NextApiRequest, NextApiResponse } from 'next'
let nodemailer = require('nodemailer')

type Data = {
  status: 'error' | 'success',
  message?: string | ''
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require('nodemailer')
  console.log(process.env);
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.host,
    auth: {
      user: process.env.username,
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'demo email',
    to: 'mslogicmaster@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err)
      res.status(500).json({ status: 'error', message: err })
    else
      res.status(200).json({ status: 'success' })
  })
}
