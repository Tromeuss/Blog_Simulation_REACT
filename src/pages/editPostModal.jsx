import { Modal } from "../components/modal";
import { Input } from "../components/input";
import { useState } from "react";

export function EditPostModal ({post, onClose, onSave}){
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault(); //? Empêche le rechargement de la page a cause du submit
        console.log(e.target);
        setError(null);
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form); //? Récupère les données du formulaire
    
        const postData = {};
        formData.forEach((value, key) => {//? Transforme les données du formulaire en objet
            postData[key] = value;
        });
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {//? Gestion du status de la requête
            onSave(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
            onClose();
        });
    };
    return <Modal onClose={onClose}>
        <h1>Editer l'article</h1>
        {error && <div className="alert alert-danger" role="alert"></div>}
        <form action="" onSubmit={handleSubmit} className="vstack gap-3">
            <Input name = "title" label = "titre" defaultValue = {post.title}/>
            <Input  name = "body" label = "Contenu" type = "textarea" defaultValue = {post.body}/>
            <div className="justify-content-end hstack gap-2">
                <button 
                type="submit" 
                className="btn btn-outline-primary">Sauvegarder</button>
                <button 
                type="button" 
                onClick={onClose} class="btn btn-danger">Annuler</button>
            </div>
            
        </form>
    </Modal>
}