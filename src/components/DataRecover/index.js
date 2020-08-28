import api from '../../service/api'
import tmbd from '../../config'

async function basicRequest(endPoint) {

    const data = await api.get(endPoint);
    return data;
}

export default {

    AllMovies: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais de netflix',
                items: await basicRequest(`/discover/tv?api_key=${tmbd.API_KEYS}&with_networks=213&language=pt-BR`),
            },
            {
                slug: 'trending',
                title: 'Recomendado para você',
                items: await basicRequest(`/trending/all/week?api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'toprated',
                title: 'Em alta Originais de netflix',
                items: await basicRequest(`/movie/top_rated?api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'action',
                title: 'Acção',
                items: await basicRequest(`/discover/movie?with_genres=28&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicRequest(`/discover/movie?with_genres=35&api_key=${tmbd.API_KEYS}&language=pt-BR`)
            },
            {
                slug: 'Drame',
                title: 'Drama',
                items: await basicRequest(`/discover/movie?with_genres=18&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicRequest(`/discover/movie?with_genres=27&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicRequest(`/discover/movie?with_genres=10749&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicRequest(`/discover/movie?with_genres=99&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await basicRequest(`/discover/movie?with_genres=16&api_key=${tmbd.API_KEYS}&language=pt-BR`),
            },

        ]
    },
    getMoviesInfos: async function GetInfoMovie(idMovie, type) {
        let infos = null;
        if (idMovie) {
            switch (type) {
                case 'movie':
                    infos = await basicRequest(`/movie/${idMovie}?api_key=${tmbd.API_KEYS}&language=pt-BR`)
                    break;
                case 'tv':
                    infos = await basicRequest(`/tv/${idMovie}?&api_key=${tmbd.API_KEYS}&language=pt-BR`)
                    break;
                default: infos = null
            }

            return infos;
        }


    }

}









