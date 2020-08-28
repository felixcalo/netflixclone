import React from 'react';
import tmdb from '../../config'
import './styles.css';

function MoviesRow({ item }) {
    return (
        <div className='movieRow'>
            <h1 >{item.title}</h1>
            <div className='movieRowItems'>
                {item.items.data.results.map((it, key) => (
                    <div key={key} className='movieRowItemsEach'>
                        <img src={`${tmdb.API_URL_IMAGE}${it.poster_path} `} alt={it.title || it.name} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MoviesRow;