import React,{useState} from 'react';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer'
import Main from './main/main'
import './style/reset.css';
import './style/sidebar-footer.css';
import './style/main-content.css';
import './style/media-queries.css';


function App() {

  const comprimento=()=>{
    const hora=new Date().getHours()
    if(hora >= 0 && hora < 13){
      return <p>Bom dia</p>
    }else if(hora >= 13 && hora < 18){
      return <p>Boa tarde</p>
    }else {
      return <p>Boa noite</p>
    }
  }

  // playlistCont1 = btn home
  // playlistCont2 = btn search
  const [playlistCont1,setPlaylistCont1]=useState(false);
  const [playlistCont2,setPlaylistCont2]=useState(true);
  const [btnSearch_Display,setBtnSerach_display]=useState(true);
  const [artist,setArtist]=useState(true);
  const onClickHome = () =>{
    setPlaylistCont1(false);
    setPlaylistCont2(true);
    setBtnSerach_display(true);
    setArtist(true);
  }
  const onClickSearch = () =>{
    setPlaylistCont1(true);
    setPlaylistCont2(false);
    setBtnSerach_display(false);
    setArtist(false);
  }

  return (
    <>
      <Header
        onClickHome = {onClickHome}
        onClickSearch = {onClickSearch}
      />
      <Main
        setdata = {comprimento}
        playlistCont1 = {playlistCont1}
        playlistCont2 = {playlistCont2}
        btnSearch_Display = {btnSearch_Display}
        artist = {artist}
      />
      <Footer/>
    </>
  );
}

export default App;
