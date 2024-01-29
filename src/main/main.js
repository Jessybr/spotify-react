import React, { useState } from "react";
import ArrowLeft from '../assets/icons/small-left.png';
import ArrowRight from '../assets/icons/small-right.png'
import Search from '../assets/icons/search.png'
import C1 from "../assets/playlist/1.jpeg";
import C2 from "../assets/playlist/2.png";
import C3 from "../assets/playlist/3.jpeg";
import C4 from "../assets/playlist/4.jpeg";
import C5 from "../assets/playlist/5.jpeg";
import C6 from "../assets/playlist/6.jpeg";
import C7 from "../assets/playlist/7.jpeg";
import C8 from "../assets/playlist/8.jpeg";
import C9 from "../assets/playlist/9.jpeg";
import C10 from "../assets/playlist/10.jpeg";
import C11 from "../assets/playlist/11.jpeg";
import C12 from "../assets/playlist/12.jpeg";
import C13 from "../assets/playlist/13.jpeg";
import C14 from "../assets/playlist/14.jpeg";
import C15 from "../assets/playlist/15.jpeg";
import MainFooter from "./main-footer";


export default function Main(props){

    const [searchTerm,setSearchTerm] = useState('');
    const [resultPlaylist,setResultPlaylist] = useState(false);
    const [resultArtist,setResultArtist] = useState(true);
    const [artistName,setArtistName] = useState("");
    const [artistImage,setArtistImage] = useState("");

    function requestApi(searchTerm) {
        const url = `http://localhost:3001/artists?name_like=${searchTerm}`
        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result))
    }
    
    function displayResults(result) {
        result.forEach(element => {
            setArtistName(element.name);
            setArtistImage(element.urlImg);
        });
    }

    const inputOnChange = (event) => {
        const newSearchTerm = event.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);

        if(newSearchTerm === ""){
            setResultPlaylist(false);
            setResultArtist(true);
        }else{
            setResultPlaylist(true);
            setResultArtist(false);
            requestApi(newSearchTerm);
        } 
    }
    

    return(
        <main>
            <div className="main-container">
                <nav className="header_navigation">
                    <div className="navigation">
                        <button className="arrow-left">
                            <img src={ArrowLeft} alt="Seta esquerda" />
                        </button>
                        <button className="arrow-right">
                            <img src={ArrowRight} alt="Seta direita" />
                        </button>
                    </div>
                    <div className={`${props.btnSearch_Display? "hidden":""} header_search`}>
                        <img src={Search} alt="search" />
                        {/* Colocar a classe aqui */}
                        <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" value={searchTerm} onChange={inputOnChange} />
                    </div>
                    <div className="header_login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
                </nav>

                <div className="playlist-container">
                    <div className={`${props.playlistCont1? "hidden": ""} HomePlaylist`}>
                        <h1>Playlists do Spotify</h1>
                        <div className="playlistHome">
                            {/* Card 1 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Dinner with Friends</span>
                                        <span className="description">The perfect soundtrack to those long nights over dinner</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Dinner Jazz</span>
                                        <span className="description">The gentle sound of some of the greatest voices and instrumentalists in Jazz. Your Jazz dinner soundtrack.</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f000000027cd703bbfec2f1e86c879bec" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Dinner Lounge</span>
                                        <span className="description">Soft electronic music for your dinner.</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f000000022ba865eb4204be02ce3e8e09" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Feel Good Dinner</span>
                                        <span className="description">An uplifting yet tasteful dinner playlist with a guaranteed feel good vibe.</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f00000002dd9acb211caf8703ea9bfc98" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Bossa Nova Dinner</span>
                                        <span className="description">Soundtrack your cozy dinner with bossa nova jazz.</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="playlist-card">
                                <div className="playlist-img">
                                    <img className="image" src="https://i.scdn.co/image/ab67706f000000028dc9fe0c14e5f34ad165e3c2" alt="img spotify"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="playlist-text">
                                    <button>
                                        <span className="playlist-name">Kitchen Swagger</span>
                                        <span className="description">Gettin' figgy with it, bana-na-na-nanana</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div id="result-playlists" className={`${resultPlaylist? "hidden": ""} ${props.playlistCont2? "hidden": ""}`}>
                        <div className="playlist">
                            {/* <!-- COLOCAR O BOM DIA | BOA TARDE | BOA NOITE --> */}
                            <h1 id="greeting">{props.setdata()}</h1>
                            <h2 className="session">Navegar por todas as seções</h2>
                        </div>
            
                        {/* <!-- LIST ITEM 1 --> */}
                        <div className="offer__scroll-container">
                            <div className="offer__list">
                                <section className="offer__list-item">
                                {/* <!-- CARD 1 --> */}
                                    <button className="cards">
                                        <div className="cards card1">
                                        <img src={C1} alt="playlist" />
                                        <span>Boas festas</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 2 --> */}
                                    <button className="cards">
                                        <div className="cards card2">
                                        <img src={C2} alt="playlist" />
                                        <span>Feitos para você</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 3 --> */}
                                    <button className="cards">
                                        <div className="cards card3">
                                        <img src={C3} alt="playlist" />
                                        <span>Lançamentos</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 4 --> */}
                                    <button className="cards">
                                        <div className="cards card4">
                                        <img src={C4} alt="playlist" />
                                        <span>Creators</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 5 --> */}
                                    <button className="cards">
                                        <div className="cards card5">
                                        <img src={C5} alt="playlist" />
                                        <span>Para treinar</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 6 --> */}
                                    <button className="cards">
                                        <div className="cards card6">
                                        <img src={C6} alt="playlist" />
                                        <span>Podcasts</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 7 --> */}
                                    <button className="cards">
                                        <div className="cards card7">
                                        <img src={C7} alt="playlist" />
                                        <span>Sertanejo</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 8 --> */}
                                    <button className="cards">
                                        <div className="cards card8">
                                        <img src={C8} alt="playlist" />
                                        <span>Samba e pagode</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 9 --> */}
                                    <button className="cards">
                                        <div className="cards card9">
                                        <img src={C9} alt="playlist" />
                                        <span>Funk</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 10 --> */}
                                    <button className="cards">
                                        <div className="cards card10">
                                        <img src={C10} alt="playlist" />
                                        <span>MPB</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 11 --> */}
                                    <button className="cards">
                                        <div className="cards card11">
                                        <img src={C11} alt="playlist" />
                                        <span>Rock</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 12 --> */}
                                    <button className="cards">
                                        <div className="cards card12">
                                        <img src={C12} alt="playlist" />
                                        <span>Hip Hop</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 13 --> */}
                                    <button className="cards">
                                        <div className="cards card13">
                                        <img src={C13} alt="playlist" />
                                        <span>Indie</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 14 --> */}
                                    <button className="cards">
                                        <div className="cards card14">
                                        <img src={C14} alt="playlist" />
                                        <span>Relax</span>
                                        </div>
                                    </button>
                    
                                    {/* <!-- CARD 15 --> */}
                                    <button className="cards">
                                        <div className="cards card15">
                                        <img src={C15} alt="playlist" />
                                        <span>Música Latina</span>
                                        </div>
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div id="result-artist" className={`${resultArtist? "hidden":""} ${props.artist? "hidden":""}`}>
                        <div className="grid-container">
                            <div className="artist-card">
                                <div className="card-img">
                                    <img className="artist-img" src={artistImage} alt="artist"/>
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <a title="Foo Fighters" href="">
                                        <span className="artist-name">{artistName}</span>
                                        <span className="artist-categorie">Artista</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <MainFooter/>
                </div>
                
            </div>
        </main>
    )
}