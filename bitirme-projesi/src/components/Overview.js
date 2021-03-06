
const Overview = ({ indexP }) => {


    //*console.dir({indexP})

    return (
         <>
            <section className="section1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6" >
                            <h1 className="section1__title" >{indexP.title}</h1>
                            <h2 className="section1__title1" >{indexP.subtitle}</h2>
                            <p className="section1__desc" >{indexP.description}</p>
                            <button href="" className="button button--height" >Let Us Help</button>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <figure class="section1__img ">
                                <img src="https://i.hizliresim.com/Ws99Ke.png" alt="section1-img" width="100%" />
                            </figure>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="section2">
                <div className="container">
                    <div className="row">
                        <div class="col-12 col-md-6 col-lg-6">
                            <figure class="section2__img">
                                <img src="https://i.hizliresim.com/QRcNcW.png" alt="covid." width="100%" />
                            </figure>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6" >
                                <h1 className="section2__title" >{indexP.title2}</h1>
                                <h2 className="section2__title2" >{indexP.subtitle2}</h2>
                                <p className="section2__desc" >{indexP.description2}</p>
                                <button className="button" >Learn More</button>
                        </div>
                        </div>
                        </div>
                </section>   
                       
         </>
     )
 };

 export default Overview