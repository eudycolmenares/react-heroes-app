import { HeroList } from "../hero/HeroList"
// 
export const DcScreen = () => {
    const publisher = 'DC Comics'
    return (
        <>
            <h1>Dc Screen</h1>
            <hr />
            <HeroList publisher={ publisher } />
        </>
    )
}