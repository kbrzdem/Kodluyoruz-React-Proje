const Prevention = ({ preventionP }) => {

    const resultHTML = [];

    preventionP.forEach(({ title, id, description }) => {
        resultHTML.push(
            <div className="row" key={id}>
                <div className="col-12 col-md-6 col-lg-6" >
                    <figure class="section5__img">
                        <img src="https://i.hizliresim.com/qeD6Ed.png" alt="covid." width="100%" />
                    </figure>
                </div>
                <div className="col-12 col-md-6 col-lg-6" >
                    <p className="section5__number" >{id}</p>
                    <h1 className="section5__title2 section5__title2--bottom " >{title}</h1>
                    <p className="section5__desc" >{description}</p>

                </div>
            </div>
        )
    });
    //*console.dir({resultHTML})
    return (

        <section className="section5">
            <div className="container">
                <h1 className="section5__title " >Covid-19</h1>
                <h2 className="section5__title2 section5__title2--text" >What Should We Do</h2>
                <p className="section5__desc section5__desc--text" >
                    Corona viruses are a type of virus. 
                    There are many different kinds, and some cause disease. A newly identified type has caused
                </p>
                <div className="row-wrap" >

                    {resultHTML}

                </div>


            </div>
        </section>


    )
};

export default Prevention