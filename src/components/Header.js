import React from 'react';

import Logo from '../assets/Shape.svg';

export default function Header() {
    return(
        <>
        <header>
        <nav>
            <Logo />
                <div>
                    <span>Meu perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
        </>
    )
}