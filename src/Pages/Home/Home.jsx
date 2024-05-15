import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import ScrollRevealComponent from "../../Components/ScrollReveal/ScrollReveal";

const Home = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubftdwf",
        "template_5uc8aer",
        ref.current,
        "v269QHhYIa7uxQKJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleTheme } = useTheme();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    return (
            <div>
                <ScrollRevealComponent />
                <header style={{ background: theme.NavBackground, color: theme.text }}>
                    <a href="#" className="logo" style={{ color: theme.text }}>Portfólio<span></span></a>
                    <ul className={`navbar ${menuOpen ? 'open' : ''}`} style={{ background: theme.NavBackground, color: theme.text }}>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#about-me" style={{ color: theme.text }}>About</a></li>
                        <li><a href="#skills" style={{ color: theme.text }}>Skills</a></li>
                        <li><a href="#timeline" style={{ color: theme.text }}>Education</a></li>
                        <li><a href="#portfolio" style={{ color: theme.text }}>Porjects</a></li>
                        <li><a href="#container-contact" style={{ color: theme.text }}>Contato</a></li>
                    </ul>
                    <div className="menu-btn" onClick={toggleMenu}>
                        <div>
                            <img src="bx-menu.svg" id="menu-icon" alt="" className="bx-x"></img>
                        </div>
                    </div>
                </header>
                <div className="container-emphasis">
                    <section className="home">
                        <div className="home-text">
                            <span>M E A R N  STACK DEVELOPER</span>
                            <h1>ATHUL KR</h1>
                            <p style={{ color: theme.text }}>Coding is the art of turning ideas into interactive experiences; full-stack developers are the artists </p>
                            <div className="main-bnt">
                                <a href="ATHUL1res.pdf" className="bnt" download>Download CV</a>
                                <a href="#portfolio" className="bnt two">Education</a>
                            </div>
                        </div>
                        <div className="share">
                            <div className="social" id="about-me">
                                <a href="https://www.linkedin.com/in/athul-kr-324426277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnQS9lTwoSYWwr%2B0nM%2BrtiA%3D%3D " target="_blank" rel="noreferrer"><img src="icon-linkedin.svg" alt="" width="30px"></img></a>
                                <a href="https://github.com/athul20011 " target="_blank" rel="noreferrer"><img src="icon-github.svg" alt="" width="30px"></img></a>
                                <a href=" " target="_blank" rel="noreferrer"><img src="icon-linktree.png" alt="" width="31px"></img></a>
                            </div>
                        </div>
                    </section>
                    <div className="home-img">
                        <img src="port1.png" alt=""></img>
                    </div>
                </div>
                <section className="container-about-me">
                    <img src="port3.png" alt="" className="about-mee"></img>
                    <article className="about-me">
                        <h4>About Me</h4>
                        <h2>I Am MEARN Stack developer</h2>
                        <p id="skills">As a beginner in the field of Information
Technology, Istrive to associate myself
with an organization where I can utilize
my skillsin the best possible manner,
which further gives me an opportunity
to grow in my career journey while
contributing to the development of the
organization.</p>
                    </article>
                </section>
                <section className="container-skills">
                    <h2>Technical Skills</h2>
                    <div className="skills">
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="icon-front.svg" alt=""></img>
                                <h3>Front-end</h3>
                                <p>HTML, CSS, Bootstrap, Javascript, Reactjs, Angular.</p>
                            </div>
                        </article>
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="icon-back-end.svg" alt=""></img>
                                <h3>Back-end</h3>
                                <p>Nodejs, Expressjs, MongoDB</p>
                            </div>
                        </article>
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="" alt=""></img>
                                <h3>basic skill</h3>
                                <p id="portfolio">Cirtical Thinking</p>
                                <p id="portfolio">Communication skill</p>

                            </div>
                        </article>
                    </div>
                </section>
                <section className="timeline" id="timeline">
                    <h2>Education</h2>
                    <article className="container-timeline">
                        <div className="box-timeline">
                            <div className="education">
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2018</span>
                                        <h3 style={{ color: theme.text }}>SSLC</h3>
                                        <p style={{ color: theme.text }}>MNKM HSS Chittlamcherry, Palakkad, kerala</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2018-2020</span>
                                        <h3 style={{ color: theme.text }}>Pluse Two</h3>
                                        <h4>Computer science</h4>
                                        <p style={{ color: theme.text }}>MNKM HSS Chittlamcherry, Palakkad, Kerala</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2020-2023</span>
                                        <h3 style={{ color: theme.text }}>Graduation</h3>
                                        <h4>Bsc Computer Science</h4>
                                        <p style={{ color: theme.text }}>Thunchezhuthan college, Elevanchery, Palakkad, Kerala</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2023-2024</span>
                                        <h3 style={{ color: theme.text }}>Mearn stack developement(internship)</h3>
                                        <p style={{ color: theme.text }}>Luminar Technolab, Kochi, Kerala</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="container-portfolio" id="portfolio">
                    <h2>projects</h2>
                    <div className="portfolio">

                        <ProjectBox ImgProject={"rest.jpg"} NameProject={"Restaurent"} DescriptionProject={"A Nutriacess é uma plataforma desenvolvida com o objetivo de democratizar o acesso a consultas nutricionais de forma acessível."} SkillsProject2={"Html"} SkillsProject3={"css"} SkillsProject4={"Bootstrap"} SiteProject={""} GithubProject={""} GithubProject2={""} />

                        <ProjectBox ImgProject={"trv.jpg"} NameProject={"Travel website"} DescriptionProject={"Brasa divina é um exemplo de site para uma pizzaria real. Nele, o usuário tem a opção de selecionar opções prontas, ou montar sua própria pizza."} SkillsProject1={"Html"} SkillsProject2={"CSS"} SkillsProject3={"Bootstrap"} SkillsProject4={"javascript"}  SiteProject={""} GithubProject={""} GithubProject2={null}  />

                        <ProjectBox ImgProject={"netflix.png"} NameProject={"netflix clone"} DescriptionProject={"A AfroGlow visa fortalecer a autoestima de crianças com cabelos afro, proporcionando autoestima e um forte sentimento de pertencimento."} SkillsProject1={"html"} SkillsProject2={"CSS"} SkillsProject3={"Bootstrap"} SkillsProject4={"reactjs"} SiteProject={""} GithubProject={""} GithubProject2={""}  />
                    </div>
                    <article className="all-projects">
                        <Link to="/all-projects" className="bnt-all">All Projects <img src="arrow-right.svg" alt="" width="10px"></img></Link>
                    </article>
                </section>
                <section className="container-contact" id="container-contact">
                    <h2>Contact Details</h2>
                    <div className="container-secondary-contact">
                        <article>
                            <form ref={ref} onSubmit={handleSubmit} className="forms-contact">
                                <input type="text" placeholder="Name" name="name"></input>
                                <input type="email" placeholder="Email" name="email"></input>
                                <textarea placeholder="Message"name="message" rows={7}></textarea>
                                <button type="submit">Sent</button>
                                {success &&
                                "Mensagem enviada com sucesso!"}
                            </form>
                        </article>
                        <article>
                        <img src="https://www.freeiconspng.com/uploads/contact-icon-png-0.png" alt="lilian versão avatar"></img>
                        </article>
                    </div>
                </section>
                <div className="fixed-icon" onClick={toggleTheme} style={{ background: theme.NavBackground }}><img src="icon-moon-sun.svg" alt="icone de sol e lua" width="30px"></img></div>
                <footer className="footer">
                    <p>© athul kr@2024.my persanal portifolio.</p>
                    <div className="icons-footer">
                    <a href="" target="_blank" rel="noreferrer"><img src="icon-linkedin.svg" width="25px"></img> - </a>
                    <a href="" target="_blank" rel="noreferrer"><img src="icon-github.svg" width="25px"></img> - </a>
                    <a href="" target="_blank" rel="noreferrer"><img src="icon-emaill.svg" width="25px"></img></a>
                    </div>
                </footer>
        
            </div>
    )
}

export default Home