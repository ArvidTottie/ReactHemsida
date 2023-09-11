import React from "react";

class Home extends React.Component {
    render() {
        return <section className="top-container">
        <div className="showcase">
          <h1>Välkommen till Lunden Pizzeria</h1>
          <p>Vi serverar husmans, pizza, kebab, grill och salladsrätter.</p>
          <div className="startsida-knappar">
            <a href="meny   " className="btn">
              Meny
            </a>
            <a href="beställ" className="btn">
              Beställ
            </a>
          </div>
        </div>
      </section>
      ;
    }
}

export default Home;