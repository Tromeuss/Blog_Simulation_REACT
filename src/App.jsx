import { useHashNavigation } from "./components/useHashNavigation"
import {Home} from "./pages/home"
import {Contact} from "./pages/contact"
import {NotFound} from "./pages/notFound"
import { Header } from "./components/header"
import { Suspense, lazy } from "react"
// import { QueryClient, QueryClientProvider } from "react-query"
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

const SingleLazy = lazy(() => import('./pages/single')) //? Importe le composant SingleLazy de manière asynchrone seulement lorsque la page est appelée.

function getPageContent ({page, param}) { //? Fonction qui me permet de récupérer le contenu de la page en fonction de la page et de son ID.
    if (page === 'home') {
        return <Home />
    }
    if (page === 'post') {
        console.log(typeof param)
        return <Suspense fallback = {<div>Chargement des composants</div>}> 
            <SingleLazy postID = {param} />
        </Suspense>
    }
    if (page === 'contact') {
        return <Contact />
    }
    return <NotFound page={page} />
}



export default App