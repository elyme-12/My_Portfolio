import Footer from "./Footer";
function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="contact2">
            <h1 className="titlee">
                Contact Me
            </h1>
            <p>  Feel free to reach out through any of the following:</p>

            {/* <!-- SOCIAL ICONS --> */}
            <div className="social-icon">
                <a href="https://www.facebook.com/elysalyn.barlan.9"><i class='bx bxl-facebook'></i></a>
                <a href="https://github.com/elyme-12"><i class='bx bxl-github'></i></a>
                <a href="https://t.me/elimint24"><i class='bx bxl-telegram'></i></a>
            </div>
            
        </div>
        <Footer/>
    </section>
    
    )
}

export default Contact;