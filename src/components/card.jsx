export function CreateCard ({title, content, href, buttonLabel, image}) { //? function qui return un composant card 
  //!{image && <img src={image} className="card-img-top" alt="">} signifie que si image existe alors affiche l'image.

    return <div  className="card" style={{marginRight: '10px'}}>
    {image && <img src={image} className="card-img-top" alt=""></img>}
    <div className="card-body">
    {title && <h5 className="card-title">{title}</h5>}
    {content && <p className="card-text">{content}</p>}
    {href && buttonLabel && <a href={href} className="btn btn-primary">{buttonLabel}</a>}
    </div>
  </div>
}