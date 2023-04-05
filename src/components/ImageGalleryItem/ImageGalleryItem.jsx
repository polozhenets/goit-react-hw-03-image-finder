


export const ImageGalleryItem = ({src,large,tags,onPictureClick}) => {
    return(
        <li className="ImageGalleryItem">
            <img onClick={onPictureClick} src={src} largesrc={large} alt={tags} />
        </li>
    )
}