import React from 'react'

const Filter = ({ handleSearch, setGenre }) => {

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
                    <input className="p-2 pl-8 py-2 text-sm text-gray-500 transition duration-100 ease-in-out transform border-transparent rounded-lg focus:border-gray-300 focus:bg-white
                        focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-2 shadow-sm"
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
                    Genre
                </label>
            </div>
        </div>
    )
}

export default Filter
