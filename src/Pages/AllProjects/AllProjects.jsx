import "./AllProjects.css";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const AllProjects = () => {

    const { theme } = useTheme();
    const { toggleTheme } = useTheme();

    return(
        <div>
            <section className="container-portfolio">
            <Link to="/">
                <h4 className="back-home"> <span className="arrow-back"> - </span> mearn projects</h4>
            </Link>
            <h2>List of projects</h2>
            <div className="all-portfolio">
            <ProjectBox ImgProject={"discal.jpg"} NameProject={"Discount calculator"} DescriptionProject={"A AfroGlow visa fortalecer a autoestima de crianças com cabelos afro, proporcionando autoestima e um forte sentimento de pertencimento."} SkillsProject1={"html"} SkillsProject2={"CSS"} SkillsProject3={"Bootstrap"} SkillsProject4={"Javascript"} SiteProject={""} GithubProject={""} GithubProject2={""} />

            <ProjectBox ImgProject={"bmi-java.jpg"} NameProject={"Bmi calculator"} DescriptionProject={"Este é um projeto que representa o clone da landing page da Netflix. Podemos observar que ficou idêntico, o layout ficou lindo, e chama muita atenção."} SkillsProject1={"html"} SkillsProject2={"CSS"} SkillsProject3={"javascript"} SkillsProject4={null} SkillsProject5={null} SiteProject={""} GithubProject={""} GithubProject2={null} />

            <ProjectBox ImgProject={"cal-java.jpg"} NameProject={"calculator"} DescriptionProject={"O Organo representa um site simples, onde utilizei um design minimalista mas delicado, e os colaboradores podem ser cadastrados de maneira simples."} SkillsProject1={"html"} SkillsProject2={"CSS"} SkillsProject3={'javascript'} SkillsProject4={null} SkillsProject5={null} />

            <ProjectBox ImgProject={"con-app.jpg"} NameProject={"Contact-app"} DescriptionProject={"A Nutriacess é uma plataforma desenvolvida com o objetivo de democratizar o acesso a consultas nutricionais de forma acessível."} SkillsProject1={"html"} SkillsProject2={"css"} SkillsProject3={"reactjs"} SkillsProject4={"cors"} SkillsProject5={"Node"} />

            <ProjectBox ImgProject={"time-java"} NameProject={"Country-time"} DescriptionProject={"Brasa divina é um exemplo de site para uma pizzaria real. Nele, o usuário tem a opção de selecionar opções prontas, ou montar sua própria pizza."} SkillsProject2={"HTML/CSS"} SkillsProject3={"JS"} />
            </div>
            </section>
            <div className="fixed-icon" onClick={toggleTheme} style={{ background: theme.NavBackground }}><img src="icon-moon-sun.svg" alt="icone de sol e lua" width="30px"></img></div>
        </div>
    )
}

export default AllProjects