import Button from "./components/Button";
import React, { useEffect } from 'react';
import SliderContainer from "./components/slider/SliderContainer";


function App() {
 /* useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      console.log("slides", slides);
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
    }

    //automatic
    let slideIndexAuto = 0;

    function showAutoSlides() {
      let j;
      let slides = document.getElementsByClassName("mySlides");
      for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
      }
      console.log(slideIndexAuto);
      slideIndexAuto++;
      if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
      slides[slideIndexAuto].style.display = "block";
      setTimeout(showAutoSlides, 5000); // Change image every 2 seconds
      console.log(slideIndexAuto);
    }

    showAutoSlides();
  });

  let slidePaths = ["./images/image.jpg","./images/meso10.jpg","./images/meso11.jpg","./images/meso12.jpg","./images/meso13.jpg" ];
*/




  return (
    <div>
      <nav className="navbar">
        <div className="header">
          <img src="./images/logo.png" alt="brath-logo" className="logo"/>
            <div className="header-top">

              <div className="navigation">
                <ul className="menu-list">
                  <div className="icon cancel-btn">
                    <i className="fas fa-times"/>
                  </div>

                  <li><a href="#">DieMetzgerei</a></li>
                  <li><a href="#">DryAged</a></li>
                  <li><a href="#">Fleischversand</a></li>
                  <li><a href="#">Events/Kurse</a></li>
                  <li><a href="#">Partyservice</a></li>
                  <li><a href="#">Tagesessen</a></li>
                  <li><a href="#">Impressum</a></li>
                  <li><a href="#">Kontakt</a></li>
                </ul>
                <img src="./images/pdf.png" alt="pdf-download" className="download"/>
              </div>
              <div className="icon menu-btn">
                <i className="fas fa-bars"/>
              </div>
            </div>
            <div className="header-bottom">
              <img src="./images/clock.svg" alt="clock" className="clock"/>
                <p className="text-big-screen">Opentime: Di.- Fr.: 07:00 - 13:00 und 15:00 - 18:30. &nbspSa.: 7:30 - 12:30</p>
                <div className="text-small-screen">
                  <p className="christmas">Christmas opentime:</p>
                  <p>Di.- Fr.: 07:00 - 13:00 und 15:00 - 18:30. &nbspSa.: 7:30 - 12:30</p>
                </div>
            </div>
        </div>
      </nav>

      <SliderContainer/>



      <div className="part">
        <div className="column">
          <div className="content dry-aged">
            <div>
              <h2>Dry aged</h2>
              <h4>Alte Wutz, Dry Aged </h4>
            </div>
            <br/>
              <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart. <br/><br/> id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>
              <div className="buttons">
                <Button title="Dry aged"></Button>
                <Button title="Alte Wurtz"></Button>
              </div>
          </div>
        </div>
        <div className="column">
          <div className="images">
            <div className="image">
              <img src="./images/meso9.svg" alt="meso"/>
            </div>
            <div className="three-img">
              <img src="./images/meso3.png" alt="meso"/>
                <img src="./images/meso4.png" alt="meso"/>
                  <img src="./images/meso1.png" alt="meso"/>
            </div>
          </div>
        </div>
      </div>
      <div className="part">
        <div className="column red three">
          <div className="content">
            <h2>Buchen Sie den</h2>
            <h2>Grillkurs jetzt</h2>
            <br/>
              <ul>
                <li>professioneller Lehrer</li>
                <li>ausgezeichneter Metzger</li>
                <li>1 Tag</li>
                <li>lernen Sie die Kunst des Grillens</li>
              </ul>
              <br/>
            <Button title="Grillkurs" btnClass="white-btn"></Button>
          </div>

        </div>
        <div className="column three">
          <img src="./images/obrok.jpg" alt="obrok" className="obrok"/>
        </div>
      </div>
      <div className="four">
        <div className="handwerk">
          <h2>Das Handwek</h2>
          <h4>alles über unsere Hausgemachte Produkte</h4>
          <br/>
            <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. <br/><br/>
              Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart. <br/><br/>
              id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
            </p>
            <br/>
              <Button title="Das Handwerk"></Button>
        </div>
        <img src="./images/logo-line.png" alt="brath-logo"  className="logo-line"/>
      </div>
        <div className="four-images">
          <img src="./images/meso8.png" alt="wurstchen"/>
            <img src="./images/meso7.png" alt="hahnchen"/>
              <img src="./images/meso6.png" alt="schwein"/>
                <img src="./images/meso5.png" alt="rind"/>
        </div>
        <div className="part">
          <div className="column three">
            <img src="./images/zacini.jpg" alt="zacini" className="obrok"/>
          </div>
          <div className="column red three">
            <div className="custome">
              <div>
                <h2>Custome spieces htmlFor your meat</h2>
                <h4>Turnbeutel nostrud exercitation ullamco</h4>
                <h4>Sprechen Sie deutsch</h4>
              </div>
              <p>Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.<br/><br/>
                Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="six">
          <img src="./images/meso2.png" alt="meso"/>
            <div className="fleisch">
              <h2>Fleischversand</h2>
              <Button title="Jetzt bestellen" btnClass="white-btn"></Button>
            </div>
        </div>
        <div className="part-seven">
          <div className="jre">
            <div>
              <img src="./images/genussnetz.png" alt="genussnetz"/>
            </div>
            <div className="metzgerei">
              <h2>Metzgerei Brath ist Mitglied</h2>
              <h2>im Genussnetzwerk</h2>
              <br/>
              <Button title="Gehen zu site"></Button>
            </div>
          </div>
          <img src="./images/logo-line.png" alt="brath-logo" className="logo-line"/>
            <div className="awards">
              <h2 className="new-line">Auszeichnungen</h2>
              <div>
                <img src="./images/special-offer.png" alt="special-offer"/>
                  <p>Tollit argumentum genau <br/>
                    Saepe lobortis</p>
              </div>
              <div>
                <img src="./images/quality.png" alt="quality"/>
                  <p>Schneewittchen <br/>
                    denique</p>
              </div>
              <div>
                <img src="./images/best-choice.png" alt="best choice"/>
                  <p>Grimms Märchen <br/>
                    expetenda</p>
              </div>
              <div>
                <img src="./images/nagrada4.svg" alt="highest quality"/>
                  <p>Mettwurst mei <br/>
                    ullum gloriatur</p>
              </div>
            </div>
            <img src="./images/logo-line.png" alt="brath-logo" className="logo-line"/>
              <p className="gray">Empfehlungs</p>
              <h2>Was die Leute über uns sagen</h2>

              <div className="app">
                <div className="cardList">
                  <button className="cardList__btn btn btn--left">
                    <div className="icon">
                      <img src="./images/left.png" alt="arrow left"/>
                    </div>
                  </button>

                  <div className="cards__wrapper">
                    <div className="card current--card">
                      <div className="card-style">
                        <div className="grill">
                          <img src="./images/grillkurs_icon.svg" alt="grill" style={{width: '60px'}}/>
                        </div>
                        <img src="./images/zvezdice.svg" alt="stars" style={{height: '20px'}}/>
                          <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .</p>
                          <div>
                            <p>Halling Tobias</p>
                            <p>Koch</p>
                          </div>
                      </div>
                      <img src="./images/znak.svg" alt="quotes" className="quotes" style={{width: '40px'}}/>
                    </div>

                    <div className="card next--card">
                      <div className="card-style">
                        <p>Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>
                        <p className="gray">Rene Weinstein</p>
                      </div>
                    </div>

                    <div className="card previous--card">
                      <div className="card-style">
                        <p>Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                        <p className="gray">Maria Kartofeln</p>
                      </div>
                    </div>
                  </div>

                  <button className="cardList__btn btn btn--right">
                    <div className="icon">
                      <img src="./images/right.png" alt="arrow right"/>
                    </div>
                  </button>
                </div>

              </div>
          <Button title="Alle Berichte"></Button>

        </div>

        <div className="footer">
          <div className="contact">
            <img src="./images/ikonice.png" alt="ikonice" className="ikonice"/>
              <div>
                <p>Klauprechtstraße 25</p>
                <p>76137 Karlsruhe, Germany</p>
                <a href="tel:+49 721 358060">+49 721 358060</a> <br/>
                <a href="mailto:info@partyservice-brath.de">info@partyservice-brath.de</a>
              </div>
          </div>
          <img src="./images/logo.png" alt="brath-logo" className="footer-logo"/>
            <div className="social">
              <p>Besuchen Sie uns auf:</p>
              <img src="./images/twitter.png" alt="twitter-logo"/>
                <img src="./images/facebook.png" alt="facebook-logo"/>
                  <img src="./images/instagram.png" alt="instagram-logo"/>
                    <img src="./images/youtube.png" alt="youtube-logo"/>
            </div>
        </div>
        <div className="footer-bottom">
          <p>© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
          <p>Code by Sara Babic and design by <a href="https://www.studiopresent.rs/" className="studio-present" target="_blank">StudioPresent</a></p>
        </div>


    </div>
  );
}

export default App;
