import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
// 
export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues
    const heroesFiltered = useMemo(() => getHeroByName(q), [ q ])
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${ searchText }`)
    }
    return (
        <>
            <h1>Searches</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search for</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2">
                            <button 
                                className="btn btn-outline-primary mt-1"
                                type="submit"
                            >Search...</button>
                        </div>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Result</h4>
                    <hr />
                    {
                        ( q === '' )
                        ?   <div className='alert alert-info'>Look for a hero!</div>
                        : ( heroesFiltered.length === 0 )
                            && <div className='alert alert-danger'>{ `No result for: '${ q }'` }</div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                                className="mb-3"
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}