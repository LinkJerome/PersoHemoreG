import React from 'react';


export default function Content(props) {
  return (
      <main className={props.contentClass}>
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
                {props.children}
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
      </main>
  );
}

