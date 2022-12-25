import React from 'react';
import ResponsiveImages from '../../content/images/children/ResponsiveImages';
import ImageThumbnails from '../../content/images/children/ImageThumbnails';
import AligningImages from '../../content/images/children/AligningImages';
import Picture from './children/Picture';
import ObjectFitSize from '../../content/images/children/ObjectFitSize';
import MoreExamples from '../../blocks/MoreExamples';

const Image = () => {
    return (
        <div id="images" className="spacer m-top-xl">
            <h3>Images</h3>
            <p>Information for opting your images into responsive behaviour (images never become larger than their parent elements). All of the image styles are added via classes.</p>

            <ResponsiveImages />

            <ImageThumbnails />

            <AligningImages />

            <Picture />

            <ObjectFitSize />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/content/images/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />

        </div>
    );
};

export default Image;
