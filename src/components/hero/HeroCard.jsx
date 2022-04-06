import { Link } from 'react-router-dom'
// 
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const  imgPath = `/assets/images/${id}.jpg`
    return (
        <div className="col-6 col-sm-4">
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <img src={ imgPath } className='img-fluid rounded-start' alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h6 className="card-title">{ superhero }</h6>
                            <p className="card-text">{ alter_ego }</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted">{ characters }</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                                <Link className='card-link' to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}