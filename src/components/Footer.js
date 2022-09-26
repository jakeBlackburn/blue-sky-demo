import React from 'react'

// footer with links to email, phone, and social media

const Footer = () => {
    return (
        <footer>
            <address>
                <a className='footerLinks' href='mailto:blueskylexva@gmail.com'>blueskylexva@gmail.com</a>
                <a className='footerLinks' href="tel:+15404636546">(540) 463-6546</a>
                <a className='footerLinks' href='https://www.instagram.com/accounts/login/?next=/blueskybakeryva/'>Instagram</a>
                <a className='footerLinks' href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fblueskybakeryva'>Facebook</a>
            </address>
        </footer>
    );
}
 
export default Footer;