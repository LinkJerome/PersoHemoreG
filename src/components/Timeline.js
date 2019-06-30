import React from 'react';

function Timeline() {
    return (
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
    );
  }

export default Timeline;