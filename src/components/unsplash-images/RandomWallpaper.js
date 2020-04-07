import React from 'react'
import {FiRefreshCw} from 'react-icons/fi';
import '../../styles/scss/index.scss';

export default function RandomWallpaper({randomImageObject}) {
    const {imageUrl, imageId, title, photographer, views, downloads} = randomImageObject;

    const downloadLink = `https://unsplash.com/photos/${imageId}/download?force=true`

    return (
        <div className='unsplash-random'>
            <div className='unsplash-wallpaper'
                style={{
                    backgroundImage: `url(${imageUrl})`
                    }} >
                <div className='unsplash-overlay' >
                    <p>{title}</p>
                    <p>Views: {views} Downloads: {downloads}</p>
                    <p>Photo Credits: {photographer}</p>
                    <a href={downloadLink} download>Download Image</a>
                </div>
            </div>

        </div>
    )
}
