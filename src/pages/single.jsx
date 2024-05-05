import {useFetch} from '../components/useFetch'
import {useDocumentTitle} from '../components/useDocumentTitle'
import { useToggle } from '../components/useToggle'
import { Modal } from '../components/modal'
import { EditPostModal } from './editPostModal'

export default function Single ({postID}) {
    
    const {datas, loading, error, setDatas} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postID}`) //? Fonction qui me permet de récupérer les données d'un post en fonction de l'ID
    const [isEditing, toggleEditing] = useToggle(false) //? Fonction qui me permet de switcher entre true et false

    const handleSave = (data) => { //? Fonction qui me permet de sauvegarder les données d'un post
         setDatas({ //? ici je combine les anciennes données avec les nouvelles données donc si il n'y a que le titre qui change dans data alors le body et l'id resteront les mêmes. 
            ...datas,
            ...data
         })
    }


    return <>
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
        {datas && <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className="text-center mb-3">{datas.title}</h1>
            <img className="img-fluid img-thumbnail my-3" src={`https://picsum.photos/id/${datas.id}/800/600`} alt="" />
            <p className='text-center'>{datas.body}</p>
        {isEditing && <EditPostModal post = {datas} onClose={toggleEditing} onSave={handleSave}/> }
        <div>
        <a href={`#post/${datas.id > 1 ? datas.id - 1 : datas.id}`} type="button" className="btn btn-primary btn-sm">Article précedent</a>
        <button type="button" className="ms-2 btn btn-outline-secondary" onClick={toggleEditing}>Edit</button>
        <a href={`#post/${datas.id + 1}`} type="button" className="ms-2 btn btn-secondary btn-sm">Article suivant</a>
        </div>
        
        </div>
        }
        {useDocumentTitle(datas.title) ? useDocumentTitle(datas.title) : useDocumentTitle('erreur')}
    </>
}