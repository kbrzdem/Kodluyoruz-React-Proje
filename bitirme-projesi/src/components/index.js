import OverviewComp from "./Overview"
import ContagionComp from "./Contagion"
import SymptompsComp from "./Symptomps"
import PreventionComp from "./Prevention"
import HeaderComp from "./Header"
import FooterComp from "./Footer"
import QestionComp from "./Qestion"



//import ButtonComp from "./button"
//export const Button = () => <ButtonComp />
//*export const Symptomps = () => <SymptompsComp />

export const Header = ({hlinks}) => {

    return(
        <HeaderComp hlinks={hlinks} />
    )
    
}
 
export const Overview = ({indexP}) => {

    return(
        <OverviewComp indexP={indexP} />
    )
    
}

export const Contagion = ({contagionP, cards}) => {
    //console.log(cards)
    return(
        <ContagionComp contagionP={contagionP} cards= {cards} />
    )
    
}

export const Symptomps = ({symptompsP}) => {
    //console.log(symptompsP)
    return(
        <SymptompsComp symptompsP={symptompsP} />
    )
}  

export const Prevention = ({preventionP}) => {
    //console.log(preventionP)
    return(
        <PreventionComp preventionP={preventionP} />
    )
}  

export const Footer = ({hlinks}) => {

    return(
        <FooterComp hlinks={hlinks} />
    )
    
}

export const Qestion = () => <QestionComp />

/** App.jsden gelen datayı componentlere aktarmak için parametre atıyoruz */