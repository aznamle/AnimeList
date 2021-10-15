import React, { useState, useEffect } from 'react'
import { useGetSearchAnimeQuery } from '../services/animeApi'

const SearchAnime = () => {
    const [ searchValue, setSearchValue ] = useState('naruto')
    const { data, isFetching } = useGetSearchAnimeQuery(searchValue)
    const animeQuery = data?.results


    useEffect(() => {
        const filteredData = animeQuery.filter((anime) => anime.title.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchValue(filteredData)
    }, [animeQuery, searchValue])

    console.log(data)
    if(isFetching) return "Loading..."

    return (
        <div>
            <div className='relative'>
                <input className="
                    p-2 pl-8
                    px-4
                    py-2
                    text-base 
                    text-black
                    transition
                    duration-100
                    ease-in-out
                    transform
                    border-transparent
                    rounded-lg
                    focus:border-gray-300
                    focus:bg-white
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-1
                    ring-offset-current 
                    ring-offset-2
                    shadow-sm
                    "
                    placeholder='Naruto'
                    onChange={(e) => setSearchValue(e.target.value)} 
                />
                <svg className="w-4 h-4 text-gray-300 absolute left-2.5 top-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>

            <div className='mx-auto flex space-x-4'>
                {animeQuery && animeQuery?.map((show) => (
                    <div>
                        {show.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchAnime
