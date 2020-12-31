import { useEffect, useState } from "react";
import { ArtistInterface } from "../interfaces/Artist.interface";
import { checkFollowed } from '../functions/artist'

export interface SearchArtistInterface {
    artist: ArtistInterface;
    followed: boolean
}

interface ReturnInterface{
    artists: SearchArtistInterface[];
    fetching: boolean;
}



export const useSearchArtists = (query: string): ReturnInterface => {
    const [fetching, setFetching] = useState(false);
    const [artists, setArtists] = useState<SearchArtistInterface[]>([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if(query === '' && query.length < 2) return;

            setFetching(true);

            const artists = await fetch(`https://us-central1-random-scraper.cloudfunctions.net/searchArtist`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({query: query})
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err);
                })

            const parsedArtists: SearchArtistInterface[] = await Promise.all(
                artists.artists.items.map(async (artist: ArtistInterface): Promise<SearchArtistInterface> => ({
                    artist,
                    followed: await checkFollowed(artist.id)
                }))
            )
            
            setArtists(parsedArtists)
            setFetching(false)
            
        }, 400)
        return () => clearTimeout(delayDebounceFn)
    }, [query])

    return {artists, fetching}
}