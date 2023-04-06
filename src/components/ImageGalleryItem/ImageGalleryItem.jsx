import PropTypes from 'prop-types';

export const ImageGalleryItem = ({src,large,tags,onPictureClick}) => {
    return(
        <li className="ImageGalleryItem">
            <img onClick={onPictureClick} src={src} largesrc={large} alt={tags} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    src:PropTypes.string.isRequired,
    large:PropTypes.string.isRequired,
    onPictureClick:PropTypes.func.isRequired
}
