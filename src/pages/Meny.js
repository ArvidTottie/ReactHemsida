import React from "react";

class Meny extends React.Component{
    render() {
        return (
<>

  {/* Produktlista  */}
  <section className="produktlista">
    <h2 id="Pizzor">Pizzor</h2>
    <div className="produkt">
      <span className="namn">1. Margeritha</span>
      <span className="pris">110 kr</span>
      <p className="produkt-beskrivning">Skinka, Tomatsås, Goudaost</p>
    </div>
    <div className="produkt">
      <span className="namn">2. Vesivio</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">Skinka, Tomatsås, Goudaost</p>
    </div>
    <div className="produkt">
      <span className="namn">3. Funghi</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">Skinka, Tomatsås, Goudaost</p>
    </div>
    <h2 id="Kebabrätter">Kebabrätter</h2>
    <div className="produkt">
      <span className="namn">1. Kebabrulle</span>
      <span className="pris">115 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Goudaost, Lök, Tomat, Gurka, Pepperoni,
        Isbergssallad, Kebabdressing
      </p>
    </div>
    <div className="produkt">
      <span className="namn">2. Kycklingrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kyckling, Tomatsås, Rödlök, Tomat, Gurka, Pepperoni, Isbergssallad,
        Vitlöksås
      </p>
    </div>
    <div className="produkt">
      <span className="namn">3. Mozzarella Kebabrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Mozzarellaost, Goudaost, Lök, Gurka, Soltorkad
        Tomat, Pepperoni, Isbergssallad, Kebabdressing, Vitlöksås
      </p>
    </div>
    <h2 id="Rullar">Rullar</h2>
    <div className="produkt">
      <span className="namn">1. Kebabrulle</span>
      <span className="pris">115 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Goudaost, Lök, Tomat, Gurka, Pepperoni,
        Isbergssallad, Kebabdressing
      </p>
    </div>
    <div className="produkt">
      <span className="namn">2. Kycklingrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kyckling, Tomatsås, Rödlök, Tomat, Gurka, Pepperoni, Isbergssallad,
        Vitlöksås
      </p>
    </div>
    <div className="produkt">
      <span className="namn">3. Mozzarella Kebabrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Mozzarellaost, Goudaost, Lök, Gurka, Soltorkad
        Tomat, Pepperoni, Isbergssallad, Kebabdressing, Vitlöksås
      </p>
    </div>
    <h2 id="Sallader">Sallader</h2>
    <div className="produkt">
      <span className="namn">1. Kycklingssallad</span>
      <span className="pris">120 kr</span>
      <p className="produkt-beskrivning">Kyckling, Majs, Ananas, Oliver, Ost</p>
    </div>
    <div className="produkt">
      <span className="namn">2. Avokadosallad</span>
      <span className="pris">120 kr</span>
      <p className="produkt-beskrivning">
        Kyckling, Tomatsås, Rödlök, Tomat, Gurka, Pepperoni, Isbergssallad,
        Vitlöksås
      </p>
    </div>
    <div className="produkt">
      <span className="namn">3. Tonfisksallad</span>
      <span className="pris">120 kr</span>
      <p className="produkt-beskrivning">
        Tonfisk, Lök, Oliver, Paprika, Citron, Ost
      </p>
    </div>
    <h2 id="Pastarätter">Pastarätter</h2>
    <div className="produkt">
      <span className="namn">1. Kebabrulle</span>
      <span className="pris">115 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Goudaost, Lök, Tomat, Gurka, Pepperoni,
        Isbergssallad, Kebabdressing
      </p>
    </div>
    <div className="produkt">
      <span className="namn">2. Kycklingrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kyckling, Tomatsås, Rödlök, Tomat, Gurka, Pepperoni, Isbergssallad,
        Vitlöksås
      </p>
    </div>
    <div className="produkt">
      <span className="namn">3. Mozzarella Kebabrulle</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Kebabkött, Tomatsås, Mozzarellaost, Goudaost, Lök, Gurka, Soltorkad
        Tomat, Pepperoni, Isbergssallad, Kebabdressing, Vitlöksås
      </p>
    </div>
    <h2 id="Burgare">Burgare</h2>
    <div className="produkt">
      <span className="namn">1. Lunden Meal</span>
      <span className="pris">115 kr</span>
      <p className="produkt-beskrivning">Hamburgare 150gr, Pommes, 33cl Läsk</p>
    </div>
    <div className="produkt">
      <span className="namn">2. BBQ-Burgare</span>
      <span className="pris">125 kr</span>
      <p className="produkt-beskrivning">
        Hamburgare 200gr, BBQ-sås, Ost, Pommes, 33cl Läsk
      </p>
    </div>
    <div className="produkt">
      <span className="namn">3. Hot Burgare</span>
      <span className="pris">100 kr</span>
      <p className="produkt-beskrivning">
        Hamburgare 200gr, Pepparost, Tigersås, Jalapeno, Pommes, 33cl Läsk
      </p>
    </div>
  </section>
</>

        )
    }
}

export default Meny;