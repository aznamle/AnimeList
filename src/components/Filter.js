import React, {useState } from 'react'
import { genres } from '../data/genres'
import { AiFillCheckCircle } from 'react-icons/ai'

const Filter = ({ handleSearch, genre, setGenre, genreIdList, setGenreIdList }) => {

    const [ isExpanded, toggleExpansion ] = useState(false)
    const closeGenreMenu = () => toggleExpansion(false)

    const addGenre = (item) => {
        if(genre.includes(item)) {
            return genre
        } else {
            const genreList = [...genre, item]
            setGenre(genreList)
        }
    }

    const addGenreId = (item) => {
        if(genreIdList.includes(item)) {
            return genreIdList
        } else {
            const idList = [...genreIdList, item]
            setGenreIdList(idList)
        }
    }

    return (
        <div className='py-4 mx-auto md:flex md:space-x-8'>
            <div className=''>
                <label className="block text-gray-600 text-md font-semibold py-2">
                    Search
                </label>
                <div className='relative'>
                    <input className="p-2 py-2 pl-8 text-sm text-gray-500 transition duration-100 ease-in-out transform border-transparent rounded-lg focus:border-gray-300 focus:bg-white
                        focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 shadow-sm"
                        placeholder=''
                        onChange={handleSearch}
                    />
                    <svg className="w-4 h-4 text-gray-300 absolute left-2.5 top-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
            </div>

            <div className=''>
                <label className="block text-gray-600 text-md font-semibold py-2">
                    Genres
                </label>
                <span className="rounded-md shadow-md">
                    <button className="inline-flex md:justify-center md:w-full px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-300 ease-in-out
                    bg-white rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800" 
                        aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117"
                        onClick={() => toggleExpansion(!isExpanded)}
                    >
                        <span>
                            {(genre.length !==0) ?
                                <div className='w-7 h-5 rounded-md text-white bg-blue-400 focus:outline-none'>
                                    +{genre.length}
                                </div> 
                                : <div className='mr-1'>Any</div>
                            }
                        </span>
                        <svg className="w-5 h-5 ml-28 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${isExpanded ? `block` : `hidden`} opacity-100 dropdown-menu transition-all duration-300 transform origin-top-right scale-95`}>
                        <div className='absolute right-0 w-48 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none' aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <p className='ml-2 text-gray-500 font-semibold py-2'>Genres</p>
                            <div className=" overflow-y-auto h-72">
                                {genres.map((item) => {
                                return (
                                    <div key={item.anime_id} onClick={closeGenreMenu}>
                                        <a className='text-gray-500 font-semibold flex cursor-pointer hover:bg-blue-500 px-4 py-1 hover:text-white transition transform duration-300' 
                                            key={item.anime_id} onClick={() => {addGenre(item.anime_id); addGenreId(item);}}
                                        >
                                            <span>{item.anime_genre}</span>
                                        </a>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Filter
