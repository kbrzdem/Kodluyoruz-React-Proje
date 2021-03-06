const Contagion = ({ contagionP, cards }) => {
    //console.dir(cards[0].title)


    const resultHTML = [];

    cards.forEach(({ title, description }) => {
        resultHTML.push(<div className="col-12 col-md-6 col-lg-4" key={title}> 
           
                            <div className="card">
                                <figure class="card__img">
                                    <img src="https://i.hizliresim.com/Ioe1X6.png" alt="card1" />
                                </figure> 
                                <h2 className="card__baslik" >{title}</h2> 
                                <p className="card__desc" >{description}</p> 
                             </div> 
             
            </div>)
    });




    return (
        
            <section className="section3">
                <div className="container">
                    <h1 className="section3__title" >{contagionP.title}</h1>
                    <h2 className="section3__title2" >{contagionP.subtitle}</h2>
                    <p className="section3__desc" >{contagionP.description}</p>


                    <div className="row">
                        
                          {resultHTML}    
                            
                    </div>
                </div>
                
            </section>

       
    )
};

export default Contagion