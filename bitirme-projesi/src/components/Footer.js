import  Qestion  from "./Qestion"
import { NavLink } from "react-router-dom"

const Footer = ({hlinks}) => {

   //console.dir(hlinks) 
   const resultHTML =[];
  
   hlinks.forEach((e) => {
       resultHTML.push(<NavLink exact to={e} key={e}>{e} </NavLink>)        
   });

     return (
         
            <footer className="footer-s">
                <div className="container">
                    <Qestion />
                    <div className="nav-wrap">
                        <figure className="nav__img">
                                <NavLink to="">
                                    <img src="https://i.hizliresim.com/5OAkrJ.png" alt="logo" />

                                </NavLink>
                        </figure>
                        <nav className="nav">
                            {resultHTML}
                        </nav>
                        <figure >
                                <NavLink to="" >
                                    <img src="https://i.hizliresim.com/K1JZE2.png" alt="logo" />    
                                </NavLink>
                                

                                <NavLink to="">
                                    <img src="https://i.hizliresim.com/3BCSkw.png" alt="logo" />
                                </NavLink>

                                <NavLink to="">
                                    <img src="https://i.hizliresim.com/6wq1qg.png" alt="logo" />
                                </NavLink>

                                <NavLink to="">
                                    <img src="https://i.hizliresim.com/fIQgcV.png" alt="logo" />
                                </NavLink>   
                            
                        </figure> 
                    </div>
                    <p class="son">2020 @ All reserved by pixelspark.co</p>
                </div>     
            </footer>
        
     )
 };

 export default Footer