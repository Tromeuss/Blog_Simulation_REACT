import { useHashNavigation } from "./components/useHashNavigation"
import {Home} from "./pages/home"
import {Single} from "./pages/single"
import {Contact} from "./pages/contact"
import {NotFound} from "./pages/notFound"
import { Header } from "./components/header"
import React from "react"

function App() {

    const {page, param} = useHashNavigation() //? Fonction qui me permet de récupérer la page et son ID en fonction de l'URL
    const pageContent = getPageContent({page, param}) //? Fonction qui me permet de récupérer le contenu de la page en fonction de la page et de son ID.

    //? Renvoie le header de la page en fonction de la page actuelle.
    return (<> 
        <Header page={page} /> 
            {pageContent}
    </>
    )
}


function getPageContent ({page, param}) { //? Fonction qui me permet de récupérer le contenu de la page en fonction de la page et de son ID.
    if (page === 'home') {
        return <Home />
    }
    if (page === 'post') {
        return <Single postID={param} />
    }
    if (page === 'contact') {
        return <Contact />
    }
    return <NotFound page={page} />
}



export default App