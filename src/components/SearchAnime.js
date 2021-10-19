import React, { useState, useEffect } from 'react'
import { useGetSearchAnimeQuery } from '../app/services/animeApi'
import AnimeCards from './AnimeCards'
import TopAnime from './Top/TopAnime'
import Filter from './Filter'
import TopAiring from './Top/TopAiring'
import {
    FaTags
} from 'react-icons/fa'
import Section from './Section'

const SearchAnime = () => {
    const searchLocalStorage = JSON.parse(localStorage.getItem('searchValue'))
    const genreLocalStorage = JSON.parse(localStorage.getItem('genre'))
    const [ searchValue, setSearchValue ] = useState(searchLocalStorage)
    const [ genre, setGenre ] = useState('')
    const [ genreIdList, setGenreIdList ] = useState('')
    const { data, isLoading, isFetching } = useGetSearchAnimeQuery({searchValue, genre})
    const animeQuery = data?.results
    
    const handleSearch = (e) => {
        localStorage.setItem('searchValue', JSON.stringify({searchValue}))
        const timer = setTimeout(() => {
        setSearchValue(e.target.value)
        }, 1500)
        return () => clearTimeout(timer)
    }

    const clearSearchTag = () => {
        setSearchValue('')
        localStorage.removeItem('searchValue');
    }
    
    //need to concat or somehow set genre value for genre=1,2,3 etc
    const clearGenreTag = (genre_id) => {
        const removeGenre = genre?.filter((g) => g.anime_id !== genre_id.anime_id)
        setGenre('')
    }

    useEffect(() => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
    }, [searchValue, genre])

    return (
        <div className=''>
            <Filter searchValue={searchValue} clearSearchTag={clearSearchTag} handleSearch={handleSearch} setGenre={setGenre} genre={genre} genreIdList={genreIdList} setGenreIdList={setGenreIdList} />
            { searchValue || genre ?  
                <Section>
                <div className='py-4 flex space-x-4 items-center'>
                    <FaTags fontSize='20px' className='text-gray-300' />
                    <div className="bg-blue-400 inline-flex items-center text-sm rounded-md overflow-hidden">
                    <span className="leading-relaxed truncate px-3 text-white font-semibold">Search: {searchValue}</span>
                        <button className="w-6 h-6 text-gray-500 bg-blue-300 focus:outline-none" onClick={clearSearchTag}>
                            <svg className="w-5 h-5 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>
                    { genre && genre?.map((g) => (
                    <div className="bg-blue-400 inline-flex items-center text-sm rounded-md overflow-hidden">
                    <span className="leading-relaxed truncate px-3 text-white font-semibold">{g.anime_genre}</span>
                        <button className="w-6 h-6 text-gray-500 bg-blue-300 focus:outline-none" onClick={() => clearGenreTag(g)}>
                            <svg className="w-5 h-5 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>
                    ))}
                </div>
                </Section>
                : undefined
            }
            <div className='py-2'>
            { searchValue!=='' || genre !=='' ? <AnimeCards isLoading={isLoading} isFetching={isFetching} animeQuery={animeQuery} /> : 
            <>
                <TopAiring />
                <TopAnime />
            </>
            }
            </div>
        </div>
    )
}

export default SearchAnime
