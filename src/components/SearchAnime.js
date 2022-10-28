import React, { useState, useEffect } from 'react'
import { useGetSearchAnimeQuery } from '../app/services/animeApi'
import AnimeCards from './AnimeCards'
import TopAnime from './Top/TopAnime'
import Filter from './Filter'
import Top from './Top/Top'
import {
    FaTags
} from 'react-icons/fa'
import Section from './Section'

const SearchAnime = () => {
    const searchLocalStorage = JSON.parse(localStorage.getItem('searchValue'))
    const genreLocalStorage = JSON.parse(localStorage.getItem('genre'))
    const genreIdLocalStorage = JSON.parse(localStorage.getItem('genreIdList'))
    const [ searchValue, setSearchValue ] = useState(searchLocalStorage || '')
    const [ genre, setGenre ] = useState('')
    const [ genreIdList, setGenreIdList ] = useState('')
    const { data, isLoading, isFetching } = useGetSearchAnimeQuery({searchValue, genre})
    const animeQuery = data?.data
    
    const gi = [{genre_info: genre && genreIdList}]
    const genreInfo = gi[0].genre_info

    const handleSearch = (e) => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
        const timer = setTimeout(() => {
        setSearchValue(e.target.value)
        }, 2000)
        return () => clearTimeout(timer)
    }

    const clearSearchTag = () => {
        setSearchValue('')
        localStorage.removeItem('searchValue');
    }
    
    // const clearGenreTag = (g) => {
    //     const removeGenre = genreIdList.filter((item) => item.anime_id !== g.anime_id)
    //     setGenre('')
    //     setGenreIdList('')
    // }

    const clearGenreId = (item) => {
        const removeGenreId = genre.filter((g) => g !== item)
        setGenre(removeGenreId)
    }

    const clearGenre = (item) => {
        const removeGenre = genreInfo.filter((g) => g !== item)
        setGenreIdList(removeGenre)
    }

    useEffect(() => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue))
    }, [searchValue, animeQuery])

    return (
        <div className=''>
            <Filter handleSearch={handleSearch} setGenre={setGenre} genre={genre} genreIdList={genreIdList} setGenreIdList={setGenreIdList} />
            { searchValue || genreIdList.length !== 0 ?  
                <Section>
                <div className='py-4 flex space-x-4 items-center'>
                    <FaTags fontSize='20px' className='text-gray-300' />
                    { searchValue && (
                    <div className="bg-blue-400 inline-flex items-center text-sm rounded-md overflow-hidden">
                    <span className="leading-relaxed truncate px-3 text-white font-semibold capitalize">Search: {searchValue}</span>
                        <button className="w-6 h-6 text-gray-500 bg-blue-300 focus:outline-none" onClick={clearSearchTag}>
                            <svg className="w-5 h-5 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>
                    )}
                    { genreInfo.length !== 0 && genreInfo?.map((g) => (
                    <div className="bg-blue-400 inline-flex items-center text-sm rounded-md overflow-hidden">
                    <span className="leading-relaxed truncate px-3 text-white font-semibold">{g.anime_genre}</span>
                        <button className="w-6 h-6 text-gray-500 bg-blue-300 focus:outline-none" 
                            onClick={() => {clearGenreId(g.anime_id); clearGenre(g)}}
                        >
                            <svg className="w-5 h-5 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>
                    ))}
                </div>
                </Section>
                : <></>
            }
            <div className='py-2'>
            { searchValue || genre.length !== 0 || genreIdList.length !== 0  || genreInfo.length !== 0 ? <AnimeCards isLoading={isLoading} isFetching={isFetching} animeQuery={animeQuery} /> : 
            <>
                <Top type='airing' title='TRENDING NOW' />
                <Top type='upcoming' title='TOP UPCOMING' />
                <TopAnime />
            </>
            }
            { animeQuery !== '' ? <AnimeCards /> 
                : 
                <div className='text-center h-full py-36'>
                    <h1 className='text-2xl font-semibold text-gray-400 transform duration-200'>No results Found</h1>
                </div>}
            </div>
        </div>
    )
}

export default SearchAnime
