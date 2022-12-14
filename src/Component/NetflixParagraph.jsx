import React from 'react'

export default function NetflixParagraph() {
    return (
        
        <div className="container">
                <div className="bg-img"></div>
                <div className="content">
                <form action="">
                        <div>
                            <input type="email" name='email' placeholder='email' className="inputt"  />
                            <input type="password" name='password' placeholder='password' className="inputt" />
                        </div>
                       
                    </form>
                    <p>new to netflix ? <a href="#">sign up now</a></p>
                    <img src="https://cordcutting.com/wp-content/uploads/2015/06/netflix-logo.png" width="100" alt="" />
                </div>
            </div>
        
    
    )
}
