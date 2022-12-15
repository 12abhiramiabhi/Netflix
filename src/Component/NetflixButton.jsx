import React from 'react'

export default function NetflixButton() {
  return (
    <div>
      <div className='button-container'>
        <button className='btn'>sign in</button>
      </div>
      <p className='para'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    </div>
  )
}