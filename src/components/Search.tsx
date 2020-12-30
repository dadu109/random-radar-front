import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    max-width:660px;
    position: relative;
    z-index:2;
    input{
        outline: none;
        font-family: 'Roboto Mono', monospace;
        padding:7px 14px;
        font-size: 18px;
        border: 2px solid #72D861;
        border-radius: 20px;
        width: 100%;
    }
    .results{
        position: absolute;
        top:50%;
        left:0;
        z-index:-1;
        background-color: #fff;
        padding-top:40px;
        min-height: 300px;
        width: 100%;
        display:flex;
        flex-direction: column;
        border: 2px solid #72D861;
        border-bottom-left-radius:20px;
        border-bottom-right-radius:20px;

        .artist{
            display:flex;
            align-items:center;
            margin-bottom:20px;
            padding: 0 20px;
            img{
                width:46px;
                height:46px;
            }
            div{
                margin-left: 20px;
                margin-right: auto;
            }
        }
    }
`

const Button = styled.button`
    background-color: #fff;
    border-radius:20px;
    text-align: center;
    width:80px;
    min-width:80px;
    padding:8px 0;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props?'#000':'#72D861'};
    border: 2px solid ${props => props?'#000':'#72D861'};
    transition: opacity .2s ease-in-out;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;

    &:hover{
        opacity: .5;
    }
`;

const Search = () => {

    // const handleArtistClick = (artist) => {
    //     checkFollowed(artist.id) ? unfollow(artist) : follow(artist);
    //     setInput('');
    // }

    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //       if(input !== '' && input.length < 2) return;
    //       setFetching(true);
    //       fetch('https://us-central1-random-scraper.cloudfunctions.net/searchArtist', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             query: input
    //         })
    //       })
    //       .then(res => res.json())
    //       .then(res => {
    //           console.log(res)
    //           setResults(res)
    //           setFetching(false)
    //         })
    //     }, 400)
    
    //     return () => clearTimeout(delayDebounceFn)
    //   }, [input])

    // const handleSearch = (e) => {
    //     setInput(e.target.value);
    // }

    return (
        <Container>
            <input 
                // value={input} 
                // onChange={handleSearch} 
            />
            {/* {input && input.length > 2 &&  */}
            <div className="results">
                {/* {results.artists && results.artists.items.map( artist => { */}
                {/* const followed = checkFollowed(artist.id) */}
                {/* return ( */}
                        <div className="artist">
                            {/* {artist.images[2] && <img src={artist.images[2]?.url} alt={artist.name} />} */}
                            <div>nazwa</div>
                            <Button 
                                // followed={followed}
                                // onClick={() => handleArtistClick(artist)}
                            >
                                {/* {followed?"Usuń":"Obserwuj"} */}
                                test
                            </Button>
                        </div>
                    {/* )} */}
                {/* )} */}
            </div>
            {/* } */}
        </Container>
    )
}

export default Search;