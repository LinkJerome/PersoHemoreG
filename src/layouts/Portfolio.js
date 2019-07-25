import React from 'react';


export default function Portfolio(props) {
  return (
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
  )}