import Button from "./button"
import { NavLink } from "react-router-dom"
const Header = ({ hlinks }) => {

    //console.dir(hlinks) 
    const resultHTML = [];

    hlinks.forEach((e) => {
        resultHTML.push(<NavLink exact to={e} key={e}>{e} </NavLink>)
    });

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="nav-wrap">
                        <figure className="nav__img">
                            <NavLink to=" "><img src="https://i.hizliresim.com/5OAkrJ.png" alt="logo" /></NavLink>

                        </figure>

                        <nav className="nav">
                            {resultHTML}
                            <button href="" className="button">Contact</button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header

/** Link, kullanımı hrefler arasında gezildiğinde refresh atmaması için
 NavLink, gittiğimiz sayfada active classını yakalamak için
 exact,
*/


