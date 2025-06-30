import "../css/content.css"

const MediaCard = ({content, image}) => {
    return (
        <div className="media-card">
            <span>
                {content}
            </span>
        </div>
    )
}

export default MediaCard