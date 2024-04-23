export function activeClassIf(condition, className) { //? Fonction qui permet de changer la classe active en fonction d'une condition.
    if (!condition) {
        return className
    }
    if (!className) {
        return 'active'
    }
    return `active ${className}`
}