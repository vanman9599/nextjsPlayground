import React from 'react'
import Link from 'next/link'

function ContactPage() {
  return (
    <div>
     <h1 className='text-7xl'>HomePage</h1> 
     <Link href="/" className='text-2xl text-blue-500'>Go to About Page</Link>
      </div>
  )
}

export default ContactPage