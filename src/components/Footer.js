import React from "react";

class Footer extends React.Component {
	render() {
		return (
            <footer>
            <div className="address">
                <h3>Address</h3>
                <p>Kärrvägen 40, Järfälla</p>
            </div>
            <div className="sociala-medier">
                <h3>Sociala Medier</h3>
                <p />
            </div>
            <div className="telefon">
                <h3>Telefon</h3>
                <p>0858034950</p>
            </div>
            </footer>
		);
	}
}

export default Footer;