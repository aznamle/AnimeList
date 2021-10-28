import React from 'react'

const AnimeStats = ({ animeDetails }) => {
    return (
        <div className='bg-white w-full md:w-64 rounded-md items-center px-4 space-y-2 py-2'>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Average Score</h1>
                <p className='text-sm text-gray-400'>{animeDetails.score}</p>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Format</h1>
                <p className='text-sm text-gray-400'>{animeDetails.type}</p>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Episodes</h1>
                <p className='text-sm text-gray-400'>{animeDetails.episodes}</p>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Episode Duration</h1>
                <p className='text-sm text-gray-400'>{animeDetails.duration}</p>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Air Date</h1>
                <p className='text-sm text-gray-400'>{animeDetails.aired.string}</p>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-gray-500'>Season</h1>
                <p className='text-sm text-gray-400'>{animeDetails.premiered}</p>
            </div>
        </div>
    )
}

export default AnimeStats
