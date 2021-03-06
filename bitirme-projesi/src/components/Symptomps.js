const Symptomps= ({symptompsP}) => {

    
    return (
        <>
           <section className="section4">
                        <div className="container"> 
                                <h1 className="section4__title" >{symptompsP.title}</h1>
                                <h2 className="section4__title2" >{symptompsP.subtitle}</h2>
                                <p className="section4__desc" >{symptompsP.description}</p>
                                <figure className="section4__resim">
                                    <img src="https://i.hizliresim.com/6dkbTe.png" alt="symptoms" width="100%"/>
                                </figure>
                        </div>
            </section>                     
        </>
    )
};

export default Symptomps