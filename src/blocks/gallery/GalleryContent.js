import React from 'react';

import GalleryPicturesData from '../../data/gallery/galleryPictures.json';

const GalleryContent = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="gallery-items clearfix">
                    { GalleryPicturesData && GalleryPicturesData.map( ( galleryPictures, key ) => {  
                        return ( 
                            <a key={ key } title= { galleryPictures.title } className="gallery-item" href={  galleryPictures.link }>
                                <div className="gallery-content">
                                    <div className="text">
                                        <h6>{ galleryPictures.title }</h6>
                                    </div>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={ galleryPictures.imageLink } alt={ galleryPictures.title } />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GalleryContent;
