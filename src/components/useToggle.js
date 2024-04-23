import React from 'react'
import {useState} from 'react'

export function useToggle (initial = false) { //? Fonction qui permet de changer l'état d'un élément
    const [state, setState] = useState(initial)
    const toggle = () => setState(v => !v) //? Lorsque useToggle est appelé, il renvoie un tableau contenant deux éléments : l'état actuel et une fonction pour basculer l'état.
    return [state, toggle]
}