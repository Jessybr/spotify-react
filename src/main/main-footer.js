import React from "react";

export default function MainFooter(){
    return(
        <>
            <footer className="footer_main">
                <div className="ftMain_conteiner">
                    <div className="session_footer">
                        <div className="list_footer">
                            <ul>
                                <li><span>Empresa</span></li>
                                <li>Sobre</li>
                                <li>Empregos</li>
                                <li>For the Record</li>
                            </ul>
                        </div>
                        <div className="list_footer">
                            <ul>
                                <li><span>Comunidades</span></li>
                                <li>Para Artistas</li>
                                <li>Desenvolvedores</li>
                                <li>Puplicidade</li>
                                <li>Investidores</li>
                                <li>Fornecedores</li>
                            </ul>
                        </div>
                        
                        <div className="list_footer">
                            <ul>
                                <li><span>Links Úteis</span></li>
                                <li>Suporte</li>
                                <li>Aplicativo móvel grátis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_social">
                        <button className="fa-brands fa-instagram"></button>
                        <button className="fa-brands fa-twitter"></button>
                        <button className="fa-brands fa-facebook"></button>
                    </div>
                </div><hr></hr>
                <div className="final_footer">
                    <p>&copy; 2024 Spotify AB</p>
                </div>

            </footer>
        </>
    )
}