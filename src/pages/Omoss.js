import React from "react";

class Omoss extends React.Component {
    render() {
        return <>
        {/* Top Container */}
        <section className="top-container">
          <header className="omoss">
            <h1>Om Oss</h1>
            <p>
              Välkommen till Lunden - din lokala pizzeria med mycket mer!
              <br />
              <br />
              Vi är ett team av matentusiaster som brinner för att skapa de mest
              utsökta maträtterna med högsta kvalitetsingredienser. Vi erbjuder inte
              bara klassiska pizzor utan även pastarätter, hamburgare, sallader och
              mycket mer.
              <br />
              <br />
              Vi strävar alltid efter att erbjuda en unik matupplevelse med en
              varierad meny som tillfredsställer alla smaker och behov. Vi använder de
              färskaste råvarorna för att tillaga våra maträtter och tror på att mat
              som lagas med kärlek smakar bättre.
              <br />
              <br />
              Vårt team är dedikerat till att erbjuda utmärkt kundservice och skapa en
              varm och välkomnande atmosfär för alla våra kunder. Vi hoppas att du
              känner dig som hemma hos oss.
              <br />
              <br />
              Tack för att du väljer Lunden för din matupplevelse!
            </p>
          </header>
        </section>
        {/* Gallery */}
        <section className="gallery">
          <img
            src="bilder/pizzerialunden.jpg"
            alt="Bild på Pizzeria lunden utomhus"
          />
          <img src="bilder/lundenframsida.jpg" alt="Bild på Pizzia lunden skylt" />
          <video autoPlay muted loop>
            <source
              src="video/pizzavideokvadrat.mp4"
              type="video/mp4"
              alt="Video där en pizza bakas"
            />
          </video>
          <img src="bilder/personallunden.jpg" alt="Bild på kassan och personal" />
          <img src="bilder/personallunden.jpg" alt="Bild på kassan och personal" />
        </section>
      </>
      ;
    }
}

export default Omoss;