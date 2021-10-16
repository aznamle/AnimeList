import React, { useState, useEffect, useRef } from 'react'
import { useGetSearchAnimeQuery } from '../services/animeApi'

const SearchAnime = () => {
    const [ searchValue, setSearchValue ] = useState()
    const { data, isFetching } = useGetSearchAnimeQuery(searchValue)
    const animeQuery = data?.results
    
    const handleSearch = (e) => {

        const timer = setTimeout(() => {
        setSearchValue(e.target.value)
        }, 1000)
        return () => clearTimeout(timer)
    }

    return (
        <div className=''>
            <label className="block text-gray-600 text-md font-semibold py-2">
                Search
            </label>
            <div className='relative'>
                <input className="p-2 pl-8 px-4 py-2 text-base text-black transition duration-100 ease-in-out transform border-transparent rounded-lg focus:border-gray-300 focus:bg-white
                    focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-2 shadow-sm"
                    placeholder='Naruto'
                    onChange={handleSearch}
                />
                <svg className="w-4 h-4 text-gray-300 absolute left-2.5 top-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                {/* <button onClick={search}></button> */}
            </div>

            <div className='flex'>
                {animeQuery ? animeQuery?.map((show) => (
                    <div key={show.mal_id}>
                        <img src={show.image_url} />
                        {show.title}
                    </div>
                )): 'loading...'}
            </div>
        </div>
    )
}

export default SearchAnime
