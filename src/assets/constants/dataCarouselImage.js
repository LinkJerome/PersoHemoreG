import maquette from './../img/website/maquette.PNG';
import meteo09 from './../img/website/meteo09.png';
import chutSite from './../img/website/chutsite.jpg';
import improvemygpx from './../img/website/improvemygpx.jpg';
import explateau from './../img/website/explateau.jpg';
import sondouagesite from './../img/website/sondouagesite.jpg';
import persograph from './../img/website/persograph.jpg';
import Hemoreg from './../img/website/HemoreG.gif';


const dataCarouselImage = {
    dataCarouselImageHemoreg: [
        {
            img: maquette,
            caption: 'French Groove',
            link: 'https://www.frenchgroove.com/',
            moreDetail: 'detailFrenchGroove'
        },
        {
            img: Hemoreg,
            caption: 'HemöreG',
            link: 'https://www.hemoreg.me',
            moreDetail: 'detailHemoreg'
        },
        {
            img: meteo09,
            caption: 'Meteo 09',
            link: 'https://www.facebook.com/Meteo09/',
            moreDetail: 'detailMeteo09'
        },
        {
            img: chutSite,
            caption: 'Chut Bibliothèque',
            link: 'https://hemoreg.me/works/chutbibliotheque/',
            moreDetail: 'detailChutBibliotheque'
        },
        {
            img: persograph,
            caption: 'Perso graph',
            link: 'https://hemoreg.me/works/persograph/',
            moreDetail: 'detailPersoGraph'
        },
    ],
    dataCarouselImageUCBL: [
        {
            img: improvemygpx,
            caption: 'Improve My GPX',
            link: 'https://hemoreg.me/works/improvemygpx/',
            moreDetail: 'detailImproveMyGpx'
        },
        {
            img: explateau,
            caption: 'Croque Salade',
            link: '',
            moreDetail: 'detailCroqueSalade'
        },
        {
            img: sondouagesite,
            caption: 'Sondouage',
            link: 'https://hemoreg.me/works/sondouage/',
            moreDetail: 'detailSondouage'
        }
    ]
};
  

  export default dataCarouselImage;