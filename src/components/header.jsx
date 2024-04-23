import React, {useState} from 'react'
import {useToggle} from './useToggle'
import { activeClassIf } from '../utilis/classname'


export function Header ({page}) {
    const [expanded, toggleExpanded] = useToggle(false) //? Hook personnalisé qui permet de changer l'état d'un élément
    //? Permet de déployer la navbar lorsqu'on clique sur le bouton hamburger


    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tromm's Blog</a>
    <button onClick={toggleExpanded}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded= {expanded} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={activeClassIf(page === 'home', 'nav-link')} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={activeClassIf(page === 'contact', 'nav-link')} href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}