import React from 'react';
import Image from '../../assets/Netflix_LoadTime.gif'
import './styles.css';

function Footer({ data }) {
    return <>
        <div className='footer'>

            <span>Feito com amor pela CaloWeb Designer</span>
            <span>Direitos de imagens https://www.netflix.com</span>
            <span>API https://developers.themoviedb.org</span>

        </div>
        {data <= 0 &&
            < div className="loading">
                <img src={Image} alt="loading..." />
            </div>
        }
    </>

}

export default Footer
