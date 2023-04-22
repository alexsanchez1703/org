import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
    <a href='https://www.linkedin.com/in/alexsanchez1703/'> 
        <img src="/img/linkedin.png" alt="Linkedin"/>
    </a>
    <a href='https://github.com/alexsanchez1703'> 
        <img src="/img/github.png" alt="GitHub" />
    </a>
    <a href='https://www.instagram.com/_alexsanchezr/'> 
        <img src="/img/instagram.png" alt="instagram" />
    </a>
    </div>
    <img src='/img/Logo.png' alt='org' /> 
    <strong>Desarrollado por Alex Sanchez</strong>
</footer>

}

export default Footer