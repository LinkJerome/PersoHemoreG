import React from 'react';
import octocat from './img/octocat.png';
import octocatWebp from './img/octocat.webp';
import Timeline from './Timeline';


function Website() {
    return (
        <div>
            <section className="hero is-fullheight">
                <header className="hero-body">
                    <div className="is-overlay has-text-centered single-spaced">
                        <figure className="image logo">
                            <picture >
                                <source srcSet={octocatWebp} type="image/webp"/>
                                <img src={octocat} alt="me as an octocat"/>
                            </picture>
                        </figure>
                    </div>

                    <div className="container has-text-centered">
                        <div className="is-overlay single-spaced">
                            <h2 className="subtitle is-2 has-text-danger is-family-code">&lt;HELLO_WORLD/&gt;</h2>
                            <h1 className="title is-1 has-text-black is-family-sans-serif">Je m'appelle HemöreG</h1>
                            <h2 className="subtitle is-3 has-text-black is-family-sans-serif">DEVELOPPEUR WEB FULL STACK</h2>
                            <a href="#infos" className="button is-large is-danger is-outlined scroll">EN SAVOIR PLUS &nbsp; <i className="fas fa-angle-down"></i></a>
                            <div className="column is-4 is-offset-4 desktop">
                                <div className="columns">
                                    <div className="column">
                                        <a href="https://www.linkedin.com/in/jerome-gil/" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-3x fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href="https://www.twitter.com/hemoreg" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-3x fa-twitter"/>
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href="https://drive.google.com/open?id=176RlWgIpr83eVcxARGN5j4FNTFQkQzdF" rel="noopener noreferrer" target="_blank">
                                            <i className="far fa-3x fa-file-pdf"/>
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href="mailto:LinkJerome@gmail.com?subject=Contact%20via%20Persohemoreg&amp;body=Pr%C3%A9nom%20%3A%20%0ANom%20%3A%0A%0ASujet%20%3A%0AContenu%20%3A">
                                            <i className="far fa-3x fa-envelope"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>

            <section className="section">
                <div className="container">
                    <h1 id="infos" className="title has-text-danger has-text-centered">A propos</h1>
                    <h2 className="subtitle has-text-centered">
                        Apprenez à me connaître !
                    </h2>
                    <div className="columns aniview" data-av-animation="fadeIn">
                        <div className="column">
                            <h1 className="title">INFOS PERSONNELLES</h1>
                            <h2 className="subtitle">Expérience significative dans le management, la vente et le service. Aisance dans le contact avec les clients, autonome, dynamique, qui a le sens de l’esprit d’équipe. Passionné d'art et d'informatique, créé des sites, des bannières ainsi que des applications en tout genre.</h2>
                            <p className="has-text-weight-bold">Identité:</p>
                            <p>Jérôme GIL</p>
                            <p className="has-text-weight-bold">Date de naissance:</p>
                            <p>Le 28 Mai 1997</p>
                            <p className="has-text-weight-bold">Lieu de naissance:</p>
                            <p>La ville rose : Toulouse</p>
                            <p className="has-text-weight-bold">Adresse:</p>
                            <p>Lyon, FRANCE</p>
                            <p className="has-text-weight-bold">Emploi actuel:</p>
                            <p>Etudiant</p>
                            <p className="has-text-weight-bold">Mail:</p>
                            <p>
                                <a className="has-text-grey-dark" href="mailto:LinkJerome@gmail.com?subject=Contact%20via%20Persohemoreg&amp;body=Pr%C3%A9nom%20%3A%20%0ANom%20%3A%0A%0ASujet%20%3A%0AContenu%20%3A">
                                        LinkJerome@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="column">
                            <h1 className="title">MES COMPETENCES</h1>
                            <h2 className="subtitle">Grâce à ma formation en Informatique sur 3 ans ; une ouverture en économie, sur les handicaps ; une culture générale ainsi qu'un stage en entreprise prévu à Ho Chi Minh City, j'ai pu surtout développer des compétences en Web mais aussi en logiciel et système.</h2>
                            <div>
                                <p className="has-text-weight-bold">HTML/CSS - 90%</p>
                                <progress className="progress is-danger" value="90" max="100">90%</progress>
                                <p className="is-uppercase has-text-weight-bold">Javascript - 85%</p>
                                <progress className="progress is-danger" value="85" max="100">85%</progress>
                                <p className="is-uppercase has-text-weight-bold">React - 60%</p>
                                <progress className="progress is-danger" value="60" max="100">60%</progress>
                                <p className="is-uppercase has-text-weight-bold">PHP - 70%</p>
                                <progress className="progress is-danger" value="70" max="100">70%</progress>
                                <p className="is-uppercase has-text-weight-bold">SQL - 60%</p>
                                <progress className="progress is-danger" value="60" max="100">60%</progress>
                                <p className="is-uppercase has-text-weight-bold">C/C++ - 75%</p>
                                <progress className="progress is-danger" value="75" max="100">75%</progress>
                                <p className="is-uppercase has-text-weight-bold">Unix - 65%</p>
                                <progress className="progress is-danger" value="65" max="100">65%</progress>
                                <p className="is-uppercase has-text-weight-bold">Suite Adobe - 80%</p>
                                <progress className="progress is-danger" value="80" max="100">80%</progress>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <h1 className="title has-text-danger">Mon navigateur favori</h1>
                        <h4 className="subtitle">Vous aimez qu'on respecte votre vie privée ? Et si vous téléchargiez <a className="has-text-danger" href="https://brave.com/hem776" target="_blank" rel="noopener noreferrer">Brave</a> grâce à moi ?</h4>
                        <a className="button is-large is-danger is-outlined has-text-centered" href="https://brave.com/hem776" target="_blank" rel="noopener noreferrer">Téléchargez Brave !</a>
                    </div>
                </div>
            </section>

            <section className="section has-background-grey-lighter">
                <Timeline/>
                <div className="container">
                    <h1 className="title has-text-black has-text-centered">Mon cursus</h1>
                    <h2 className="subtitle has-text-centered">
                        Issu d'un Baccalauréat général scientifique, j'ai décidé de me lancer dans l'informatique et d'avoir des compétences dans la gestion et l'enseignement.
                    </h2>
                    <div className="timeline is-centered aniview" data-av-animation="bounceInRight">
                    <header className="timeline-header">
                        <span className="tag is-medium has-text-black is-primary">Aujourd'hui</span>
                    </header>
                        <div className="timeline-item is-primary">
                        <div className="timeline-marker is-primary is-icon">
                        <i className="fas fa-building"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Mai 2019 - Aujourd'hui</p>
                        <p>Stage développeur web Fullstack - Capgemini, VIETNAM</p>
                        </div>
                    </div>
                    <div className="timeline-item is-primary">
                        <div className="timeline-marker is-primary is-icon">
                        <i className="fas fa-school"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Septembre 2016 - Juin 2019</p>
                        <p>Licence en informatique - Université Claude Bernard, Lyon</p>
                        </div>
                    </div>
                    <div className="timeline-item is-primary">
                        <div className="timeline-marker is-primary is-icon">
                        <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Septembre 2016 - Juin 2017</p>
                        <p>Tuteur ZupdeCo, Collège Gabriel Rosset, Lyon</p>
                        </div>
                    </div>
                    <div className="timeline-item is-primary">
                        <div className="timeline-marker is-primary is-icon">
                        <i className="fas fa-train"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Mai 2016 - Actuel</p>
                        <p>Agent Service Commercial Train - SNCF</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-medium has-text-black is-info">2016</span>
                    </header>
                    <div className="timeline-item is-info">
                        <div className="timeline-marker is-info is-icon">
                        <i className="fas fa-star"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Mai 2014 - Mai 2016</p>
                        <p>Responsable Buvette - Mindtrick</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-medium has-text-black is-info">2014</span>
                    </header>
                    <div className="timeline-item is-danger">
                        <div className="timeline-marker is-danger is-icon">
                        <i className="fas fa-crown"></i>
                        </div>
                        <div className="timeline-content">
                        <p className="heading">Septembre 2013 - Juin 2015</p>
                        <p>Délégation au Conseil de Vie Lycéenne</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-medium has-text-black is-danger">2013</span>
                    </header>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h1 className="title has-text-danger has-text-centered">Mon portfolio</h1>
                    <h2 className="subtitle has-text-centered">
                        Si vous souhaitez découvrir mon travail, voici mon portfolio !
                    </h2>
                    <div id="slider">
                    <figure>
                        <picture>
                            <source srcSet="./img/chutsite.webp" type="image/webp"/>
                            <img src="./img/chutsite.jpg" onClick="window.location.href = '../works/chutbibliotheque/'" alt="site chut bibliotheque"/>
                        </picture>
                        <picture>
                            <source srcSet="./img/explateau.webp" type="image/webp"/>
                            <img src="./img/explateau.jpg" alt="site croque carotte"/>
                        </picture>
                        <img src="./img/improvemygpx.jpg" onClick="window.location.href = '../works/improvemygpx/'" alt="site graphique"/>
                        <img src="./img/persograph.jpg" onClick="window.location.href = '../works/persograph/'" alt="page personnelle graphique"/>
                        <picture>
                            <source srcSet="./img/sondouagesite.webp" type="image/webp"/>
                            <img src="./img/sondouagesite.jpg" onClick="window.location.href = '../works/testihm/'" alt="site sondouage"/>
                        </picture>
                    </figure>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                    <strong>HemöreG</strong> par <a href="https://www.hemoreg.me">Jérôme GIL</a>. Le code source est sous licence
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Le contenu du site web
                    est sous licence <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </div>
    );
  }

export default Website;