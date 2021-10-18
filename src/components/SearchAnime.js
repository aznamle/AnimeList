import React, { useState, useEffect } from 'react'
import { useGetSearchAnimeQuery } from '../app/services/animeApi'
import AnimeCards from './AnimeCards'
import TopAnime from './Top/TopAnime'
import Filter from './Filter'
import TopAiring from './Top/TopAiring'

const SearchAnime = () => {
    //new visits not showing top anime WIP
    const searchLocalStorage = JSON.parse(localStorage.getItem('searchValue'))
    const [ searchValue, setSearchValue ] = useState(searchLocalStorage)
    const [ genre, setGenre ] = useState('')
    const { data, isLoading, isFetching } = useGetSearchAnimeQuery(searchValue, genre)
    const animeQuery = data?.results
    
    const handleSearch = (e) => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
        const timer = setTimeout(() => {
        setSearchValue(e.target.value)
        }, 1000)
        return () => clearTimeout(timer)
    }

    const clearTag = () => {
        setSearchValue('')
        localStorage.removeItem('searchValue');
    }

    useEffect(() => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
    }, [searchValue])

    return (
        <div className=''>
            <Filter searchValue={searchValue} clearTag={clearTag} handleSearch={handleSearch} setGenre={setGenre} />
            { searchValue ? 
                <div className='py-4'>
                    <div className="bg-blue-400 inline-flex items-center text-sm rounded-md overflow-hidden">
                    <span className="leading-relaxed truncate px-3 text-white font-bold">Search: {searchValue}</span>
                        <button className="w-6 h-6 text-gray-500 bg-blue-300 focus:outline-none" onClick={clearTag}>
                            <svg className="w-5 h-5 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>
                </div>
                : undefined
            }
            <div className='py-2'>
            { searchValue ? <AnimeCards isLoading={isLoading} isFetching={isFetching} animeQuery={animeQuery} /> : 
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
