import { HeroCard } from "./HeroCard"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
// 
export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher( publisher )
    return (
        <div className="row g-3">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } />
                ))
            }
        </div>
    )
}