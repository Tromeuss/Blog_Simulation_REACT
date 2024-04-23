import {useDocumentTitle} from '../components/useDocumentTitle.js'
import {useFetch} from '../components/useFetch.js'
import { CreateCard } from '../components/card.jsx'

export function Home () {
    useDocumentTitle('Mon blog')
    const {datas, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10') //? Fonction qui retourne les données et l'état de la requête.
    return <>
        <h1>Mon blog</h1>
        {loading && <div    
            className="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>}
        {error && <div 
            className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                Erreur lors de la requete : {error.message}
            </div>
            </div>}
        {datas && <div className='ps-2 row gap-4 d-flex justify-content-center'>
            {datas.map((post) => <div key = {post.id} className='col-12 col-md-4'>
                <CreateCard 
                    title={post.title} 
                    content={post.body} 
                    href={`#post/${post.id}`} 
                    buttonLabel="Lire la suite"
                    image={`https://picsum.photos/id/${post.id}/280/180`}/>
                </div>
            )}
        </div>}
    </>
}