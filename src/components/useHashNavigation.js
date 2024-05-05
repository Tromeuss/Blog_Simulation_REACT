import { useEffect, useState } from "react";

export function useHashNavigation() {
    const [hash, setHash] = useState(location.hash) //? useSate qui me permet de mettre à jour le hash de l'URL grace à setHash.

    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleHashChange) //? Lorsque le hash de la page change (donc lorsque l'utilisateur change de page), on met à jour le hash de l'URL.
        return () => {window.removeEventListener('hashchange', handleHashChange)} //? fonction de nettoyage qui supprime l'écouteur d'événement lorsque le composant est démonté.
    }, [])

    const cleanHash = hash.replaceAll('#', '') //? Parse le hash de l'URL pour ne garder que le nom de la page et son ID.
    const page = cleanHash ? cleanHash.split('/')[0] : 'home'
    const param = cleanHash ? cleanHash.split('/')[1] : null
    return {page, param}
}