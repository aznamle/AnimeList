import React from 'react'

const Filter = ({ searchValue, handleSearch, setGenre, clearTag }) => {

    const addGenre = (genre) => {
        const genreList = [...genre, genre]
        setGenre(genreList)
    }

    return (
        <div className='py-4 mx-auto flex space-x-8'>
            <div className=''>
                <label className="block text-gray-600 text-md font-semibold py-2">
                    Search
                </label>
                <div className='relative'>
                    <input className="py-2 text-sm text-gray-500 transition duration-100 ease-in-out transform border-transparent rounded-lg focus:border-gray-300 focus:bg-white
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
                <span className="rounded-md shadow-sm">
                    <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-200 ease-in-out
                    bg-white rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800" 
                    aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span>Any</span>
                    <svg className="w-5 h-5 ml-20 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Filter
