import React from 'react';
import { MdRefresh } from 'react-icons/md';

export default function RandomWallpaper({
    randomImageObject,
    randomImageHandler,
}) {
    const {
        imageUrl,
        imageId,
        title,
        photographer,
        views,
        downloads,
    } = randomImageObject;

    const downloadLink = `https://unsplash.com/photos/${imageId}/download?force=true`;

    return (
        <>
            <MdRefresh
                style={{
                    border: '1px solid',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    width: '80px',
                }}
                size='2em'
                onClick={randomImageHandler}
            />
            <div className='unsplash-random'>
                <div
                    className='unsplash-wallpaper'
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                >
                    <div className='unsplash-overlay'>
                        <p>{title}</p>
                        <p>
                            Views: {views} Downloads: {downloads}
                        </p>
                        <p>Photo Credits: {photographer}</p>
                        <a href={downloadLink} download>
                            Download Image
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
