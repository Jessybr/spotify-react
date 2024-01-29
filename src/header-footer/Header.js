import React from "react";
import LogoSpotify from '../assets/icons/logo-spotify.png'


export default function Header(props){
    

    return(
            <div className="sidebar">
                <nav className="sidebar_navigation">
                    <div className="logo">
                        <button>
                            <img src={LogoSpotify} alt="logo spotify" />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <button onClick={props.onClickHome}>
                            <span className="fa fa-home"></span>
                            <span>Início</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={props.onClickSearch}>
                            <span className="fa fa-search"></span>
                            <span>Buscar</span>
                            </button>
                        </li>
                    </ul>
                </nav>

            <div className="library">
                <div className="library_content">
                    <button className="library_button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>

                <section className="section-playlist">
                    <div className="section-playlit-content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist_button">Criar playlist</button>
                    </div>
                    <div className="section-playlit-content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisamos você sobre novos episódios.</span>
                        <button className="section-playlist_button btn-expl">Explorar podcasts</button>
                    </div>
                </section>

                <div className="cookies">
                    <p>Legal</p>
                    <p>Centro de Privacidade</p>
                    <p>Política de Privacidade</p>
                    <p>Cookies</p>
                    <p>Sobre anúncios</p>
                    <p>Acessibilidade</p>
                    <p>Notice at Collection</p>
                    <p>Your Privacy Choices</p>
                </div>

                <div className="languages">
                    <button className="languages_button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>

            </div>
        </div>
    )
}