import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright <sup>&copy;</sup> {currentYear}</p>
        </footer>
    )
}

export default Footer;