import { useEffect } from 'react'


export function useDocumentTitle (title) { //? Fonction qui me permet de changer le titre de la page
    useEffect(() => {
        document.title = title
    }, [title])
}