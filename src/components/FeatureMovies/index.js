import React from 'react';
import tmdb from '../../config'
import './styles.css'

export default function FeatureMovies({ item }) {
    return (<div>
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${tmdb.API_URL_IMAGE_BACKGROUND}${item.backdrop_path})`
        }}>

            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.name}</div>
                    <div className='featured--infos'>
                        <div className='featured--points'>{item.vote_average} Pontos</div>
                        <div className='featured--year'>{item.last_air_date}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--sinopse'>{item.overview}</div>
                    <div className='featured--buttons'>
                        <button className='featured--watch--button' type='button' >► Assistir</button>
                        <button className='featured--List--button' type='button' > + Minha Lista</button>
                    </div>
                    <div className='featured--genres'>
                        Gêneros: {item.genres.map(item => item.name).join(', ')}
                    </div>

                </div>
            </div>
        </section >
    </div>

    )

}

