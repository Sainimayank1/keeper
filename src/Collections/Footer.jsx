import React from "react";

const d = new Date();
const year  = d.getFullYear();


function Footer()
{
    return <footer><p>Copyright &copy; {year}</p></footer>;
}

export default Footer;