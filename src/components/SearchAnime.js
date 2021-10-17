import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useGetSearchAnimeQuery } from '../services/animeApi'
import AnimeCards from './AnimeCards'
import TopAnime from './TopAnime'
import { useHistory } from "react-router-dom";
import Loader from './Loader'


const SearchAnime = () => {
    //new visits not showing top anime WIP
    const searchLocalStorage = JSON.parse(localStorage.getItem('searchValue'))
    const [ searchValue, setSearchValue ] = useState(searchLocalStorage)
    const { data, isFetching, isLoading } = useGetSearchAnimeQuery(searchValue)
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
            <div className='py-4'>
                <label className="block text-gray-600 text-md font-semibold py-2">
                    Search
                </label>
                <div className='relative'>
                    <input className="p-2 pl-8 px-4 py-2 text-base text-black transition duration-100 ease-in-out transform border-transparent rounded-lg focus:border-gray-300 focus:bg-white
                        focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-2 shadow-sm"
                        placeholder=''
                        onChange={handleSearch}
                    />
                    <svg className="w-4 h-4 text-gray-300 absolute left-2.5 top-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
            </div>
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
            { searchValue ? <AnimeCards isFetching={isFetching} animeQuery={animeQuery} /> : <TopAnime /> }
            </div>
        </div>
    )
}

export default SearchAnime
