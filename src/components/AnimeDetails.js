import React from 'react'
import { useParams } from 'react-router'
import { useGetAnimeQuery } from '../app/services/animeApi'
import Loader from './Loader'

const AnimeDetails = () => {
    const { mal_id } = useParams()
    const { data, isFetching } = useGetAnimeQuery(mal_id)

    const animeDetails = data

    if(isFetching) return <Loader />
    
    return (
        <div className=''>
            
            <div className='bg-gray-50'>
                <div className='mx-auto max-w-screen-2xl px-20 py-12 flex'>
                    <div className='shadow-xl w-72'>
                        <img className='object-cover w-full rounded-md' src={animeDetails.image_url} />
                    </div>
                    <div className='ml-8 space-y-2 w-3/5'>
                        <h1 className='text-2xl text-gray-500'>
                            {animeDetails.title}
                        </h1>
                        <p className='text-sm font-medium text-gray-400 tracking-wide leading-normal whitespace-pre-line'>
                            {animeDetails.synopsis}
                        </p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default AnimeDetails
