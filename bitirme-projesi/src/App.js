import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from  'axios';

import "./App.css";

import { Header, Overview, Contagion,Symptomps, Prevention,Qestion, Footer} from "./components"

function App() {

  const [links, setLinks] = useState([])
  const [indexP, setİndexP] = useState([])
  const [contagion, setContagion] = useState([])
  const [card, setCard] = useState([])
  const [symptompsP, setSymptompsP] = useState([])
  const [preventionP, setPreventionP] = useState([])

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json')
    .then(function({data}) {
      setLinks(data[0].headerLinks);
      setİndexP(data[0].indexPage);
      setContagion(data[0].contagionPage);
      setCard(data[0].contagionPage.cards);
      setSymptompsP(data[0].symptompsPage);
      setPreventionP(data[0].preventionPage);
      //*console.log(data[0].symptompsPage)
      //*console.log(data[0].contagionPage.cards)
      //{data} süslü parantez gelen değerin içerisindeki data demek 

      })
      .catch(function(error) {
        console.log("hata")
      })
  }, [])
  
//useEffect(function, [])-- boş dizi(2.parametre) comp. oluşturduktan sonra bir kez çalıştırıyor


  return (
  <>
    <Router>
      <Header hlinks= {links} />
      <main>
        
          <Switch>
                <Route path="/Contagion" >
                  <Contagion contagionP={contagion} cards={card} /> 
                </Route>
                <Route path="/Symptoms" >
                  <Symptomps symptompsP= {symptompsP}  />
                </Route>
                <Route path="/Prevention">
                  <Prevention preventionP= {preventionP} />
                </Route>
                <Route path="/" >
                  <Overview  indexP= {indexP} />
                </Route>
          </Switch>
          
      </main>
      
      <Footer hlinks= {links} /> 
    </Router>
  </>  
  );
}

export default App;

