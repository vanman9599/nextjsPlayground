import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
     <h1 className='text-7xl'>HomePage</h1> 
     <Link href="/about" className='text-2xl text-blue-500'>Go to About Page</Link>
      </div>
  )
}

export default HomePage