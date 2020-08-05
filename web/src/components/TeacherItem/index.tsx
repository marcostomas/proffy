import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/54940343?s=460&u=f4736064fb76a88af03aa5c57f7008343f6b3c04&v=4" alt="Marcos Tomás"/>
                <div>
                    <strong>Marcos Tomás</strong>
                    <span>Matemágico</span>
                </div>
            </header>
            
            <p>
                Tentando fazer esse programa funcionar.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;