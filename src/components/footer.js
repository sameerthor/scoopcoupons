import Link from "next/link";


export default function Footer() {


    return (
        <>
        <footer className="footer-items">
            <div className="container">
                <div className="row mb-4">
                    {/* Footer Logo and Description */}
                    <div className="col-lg-3 col-md-12 mb-4">
                        <div className="textwidget">
                            <div className="FooterLogo">
                                Scoop<span>Coupons</span>
                            </div>
                            <p>
                                Hello World! ScoopCoupons is here to bring you the biggest database of coupons and deals. So, shop the top brands and get the best price on all the products and services. Stay Tuned!
                            </p>
                        </div>
                    </div>
    
                    {/* Site Links */}
                    <div className="col-lg-3 col-md-6 footerbox mb-3">
                        <h4>SITE LINKS</h4>
                        <a href="https://scoopcoupons.com/about-us/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> About Us</a><br />
                        <a href="https://scoopcoupons.com/amazon-disclosure/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> Amazon Disclosure</a><br />
                        <a href="https://scoopcoupons.com/amazon-disclosure/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> Affiliate Disclosure</a>
                    </div>
    
                    {/* Get Help Links */}
                    <div className="col-lg-3 col-md-6 footerbox mb-3">
                        <h4>GET HELP</h4>
                        <a href="https://scoopcoupons.com/how-to-use-coupon/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> How to Use Coupon</a><br />
                        <a href="https://scoopcoupons.com/discount-guide/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> Discount Guide</a><br />
                        <a href="https://scoopcoupons.com/contact-us/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> Contact Us</a>
                    </div>
    
                    {/* Keep Updated Section */}
                    <div className="col-lg-3 col-md-12 footerbox update mb-3">
                        <h4>KEEP UPDATED</h4>
                        <form className="d-flex">
                            <div className="footerInput">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                    </svg>
                                </span>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                        <br />
                        <p>
                            You can opt out of our newsletters at any time. See our <a href="#">privacy policy.</a>
                        </p>
                        <div id="social" className="d-flex">
                            <div id="fb">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* Disclaimer */}
                <div className="desc">
                    At ScoopCoupons.com, we provide the right coupon code, and promo codes to help our users save money while shopping. But, we can not give you any guarantee. Check the legitimacy at the merchant's website before making any purchase.
                </div>
            </div>
        </footer>
    
        {/* Footer Bottom */}
        <div className="footer">
            <div className="footerAngle">
                <a href="#" aria-label="Back to top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                    </svg>
                </a>
            </div>
            <div className="copyrightText">
                <p>Copyright &copy; 2023 ScoopCoupons. All Rights Reserved</p>
            </div>
        </div>
    </>
    
    )
}
