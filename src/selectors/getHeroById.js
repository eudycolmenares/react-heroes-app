import { heroes } from "../data/heroes"
// 
export const getHeroById = (id = '') => 
    heroes.find( heroe => heroe.id === id)