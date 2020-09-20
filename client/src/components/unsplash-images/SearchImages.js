import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import { FiDownload } from 'react-icons/fi';
import RippleButton from '../common/components/buttons/RippleButton';

function SearchImage(props) {
    const [query, setQuery] = useState('pen');
    const { searchedImages } = props;

    const renderImages = () => {
        if (_.isEmpty(searchedImages)) {
            return null;
        }
        return searchedImages.results.map((item) => {
            const downloadLink = `https://unsplash.com/photos/${item.id}/download?force=true`;
            return (
                <div className='unsplash-img' key={item.id}>
                    <img src={item.urls.regular} alt={item.id} />
                    <div className='overlay'>
                        <p>{item.user.name}</p>
                        <a href={downloadLink} download>
                            <FiDownload
                                className='download'
                                size='2em'
                                color='beige'
                            />
                        </a>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <div className='unsplash-form'>
                <input
                    type='text'
                    name='name'
                    autoComplete='off'
                    required
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <label htmlFor='name' className='label-name'>
                    <span className='content-name'>
                        <FormattedMessage
                            id='images.search'
                            defaultMessage='search'
                        />{' '}
                    </span>
                </label>
            </div>
            <RippleButton onClick={() => props.saveSearch(query)}>
                <FormattedMessage id='images.search' defaultMessage='search' />
            </RippleButton>

            <div className='unsplash-container'>{renderImages()}</div>
        </div>
    );
}

export default SearchImage;
