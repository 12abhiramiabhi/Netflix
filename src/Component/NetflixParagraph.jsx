import React from 'react'
import { useState } from 'react'

export default function NetflixParagraph() {

    function ClickSigin() {
        alert(email + password)
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    return (
        <div className='mid-session' >
            <input type="email" name='email' placeholder='email' className="inputt1" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" name='password' placeholder='password' className="inputt" onChange={(e) => { setPassword(e.target.value) }} />
            <p>new to netflix ? <a href="#">sign up now</a></p>
            <img src="https://cordcutting.com/wp-content/uploads/2015/06/netflix-logo.png" width="100" alt="" />
            <div>
                <div className='button-container'>
                    <button className='btn' onClick={ClickSigin}>sign in</button>
                </div>
                <p className='para'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
        </div>

    )
}
