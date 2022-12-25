import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import MediaObjectExample from './children/MediaObjectExample';
import MediaObjectNesting from './children/MediaObjectNesting';
import MediaObjectAlignment from './children/MediaObjectAlignment';
import MediaObjectOrder from './children/MediaObjectOrder';
import MediaList from './children/MediaList';

const MediaObject = () => {
    return (
        <div id="media-object" className="spacer m-top-xl">
            <h3>Media object</h3>
            <p>Object to construct highly repetitive components like blog comments, tweets, and the like.</p>

            <MediaObjectExample />

            <MediaObjectNesting />

            <MediaObjectAlignment />

            <MediaObjectOrder />

            <MediaList />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/media-object/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default MediaObject;
