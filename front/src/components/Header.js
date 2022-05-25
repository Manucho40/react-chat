import React from 'react';
import '../assets/css/header.css'
const Header = ({toggleModal}) => {
    return ( 
        <>
            <header>
                <nav>
                    <h1>TheChat</h1>
                    <ul>
                        <li><button>S'inscrire</button></li>
                        <li><button onClick={toggleModal}>Connexion</button></li>
                    </ul>   
                </nav>
            </header>
        
        </>
     );
}
 
export default Header;