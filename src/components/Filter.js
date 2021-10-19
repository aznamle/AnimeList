import React, {useState, useEffect } from 'react'

const Filter = ({ searchValue, handleSearch, genre, setGenre, clearTag, genreIdList, setGenreIdList }) => {

    const genres = [
        { anime_genre: 'Action', anime_id: '1'},
        { anime_genre: 'Adventure', anime_id: '2'},
        { anime_genre: 'Cars', anime_id: '3'},
        { anime_genre: 'Comedy', anime_id: '4'},
        { anime_genre: 'Avante Garde', anime_id: '5'},
        { anime_genre: 'Demon', anime_id: '6'},
        { anime_genre: 'Ecchi', anime_id: '9'},
        { anime_genre: 'Fantasy', anime_id: '10'},
        { anime_genre: 'Game', anime_id: '11'},
        { anime_genre: 'Hentai', anime_id: '12'},
        { anime_genre: 'Historical', anime_id: '13'},
        { anime_genre: 'Horror', anime_id: '14'},
        { anime_genre: 'Kids', anime_id: '15'},
        { anime_genre: 'Martial Arts', anime_id: '17'},
        { anime_genre: 'Mecha', anime_id: '18'},
        { anime_genre: 'Music', anime_id: '19'},
        { anime_genre: 'Parody', anime_id: '20'},
        { anime_genre: 'Samurai', anime_id: '21'},
        { anime_genre: 'Romance', anime_id: '22'},
        { anime_genre: 'School', anime_id: '23'},
        { anime_genre: 'Sci Fi', anime_id: '24'},
        { anime_genre: 'Shoujo', anime_id: '25'},
        { anime_genre: 'Girls Love', anime_id: '26'},
        { anime_genre: 'Shounen', anime_id: '27'},
        { anime_genre: 'Boys Love', anime_id: '28'},
        { anime_genre: 'Space', anime_id: '29'},
        { anime_genre: 'Sports', anime_id: '30'},
    ]

    const [ isExpanded, toggleExpansion ] = useState(false)
    const closeGenreMenu = !toggleExpansion

    const addGenre = (item) => {
        if(genre.includes(item)) {
            return genre
        } else {
            localStorage.setItem('searchValue', JSON.stringify({searchValue}))
            const timer = setTimeout(() => {
                const genreList = [...genre, item]
                setGenre(genreList)
            }, 1000)
            return () => clearTimeout(timer)
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
        <div className='py-4 mx-auto flex space-x-8'>
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
                    <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-300 ease-in-out
                    bg-white rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800" 
                        aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117"
                        onClick={() => toggleExpansion(!isExpanded)}
                    >
                        <span>Any</span>
                        <svg className="w-5 h-5 ml-28 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${isExpanded ? `block` : `hidden`} opacity-100 dropdown-menu transition-all duration-300 transform origin-top-right scale-95`}>
                        <div className='absolute right-0 w-48 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none' aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <p className='ml-2 text-gray-500 font-semibold py-2'>Genres</p>
                            <div className=" overflow-y-auto h-72">
                                {genres.map((item) => (
                                    <a className='text-gray-500 font-semibold flex cursor-pointer hover:bg-blue-500 px-4 py-1 hover:text-white transition transform duration-300' key={item.anime_id} onClick={() => {addGenre(item.anime_id); addGenreId(item.anime_genre);}}>
                                        <span>{item.anime_genre}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Filter
