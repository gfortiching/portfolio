import "../CSS/Footer.css";

function Footer() {

    function End() {

        return (
        <>
        <section className="link-animation">
            <h1>You've reached the end!</h1>
            <h1>You've reached the end!</h1>
            <h1>You've reached the end!</h1>
            <h1>You've reached the end!</h1>
            <h1>You've reached the end!</h1>
            <h1>Thank You! &#128157;</h1>
        </section>
        </>
    )
    }

    return (
        <>
        <section className="footer">
            <div className="footer-text secondary text-center">
            <div className="socialsContainer primary">
                    <div className="socials" data-aos="fade-up">
                        <a href="https://www.linkedin.com/in/gfortiching" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670129.png" alt="LinkedIn" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="https://github.com/gfortiching" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" alt="Github" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="https://www.freecodecamp.org/gfortiching" target="blank"><img src="https://img.stackshare.io/stack/12741/bcc87e47eb053f5947fa6dbe45beba33a3d1dc56.png" alt="FreeCodeCamp" /></a>
                    </div>
                </div>
                {/* <img data-aos="fade-up" src={Logo} alt="Code" className='icons' /> */}
                <h4 data-aos="fade-up">Jose Gabriel Fortich Fabileña </h4>
                <h5 data-aos="fade-up">Homemade with &#128157; in 2022</h5>
            </div>
        </section>
        <section className="infinite-animation"><End /></section>
        </>
    )
}

export default Footer;