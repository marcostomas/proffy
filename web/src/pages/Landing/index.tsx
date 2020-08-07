import React, { useState, useEffect } from 'react';
/*
    1. Ao importar { Link }, o React Router Dom passa a 
    funcionar como SPA (Single Page Application).
    
    2. Deve-se substituir <a> por <Link>, e substituir
    href="" por to="".
*/

// 1 ↓
import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';
/*  
    Para trazer arquivos externos, como imagens, no caso
    é necessário usar import. 
    
    No src é preciso usar as chaves, pois caso contrário
    o React interpretaria como um texto.
*/

function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} =  response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingimg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    {/* 2. ↓ */}
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Estudar
                    </Link>

                    <span className="total-connections">
                        Total de {totalConnections} conexões realizadas  <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Landing;