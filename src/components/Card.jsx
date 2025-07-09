import test from '../assets/test.jpeg'
import '../css/project.css'

const Card = ({title, desc, pic}) => {
    return (
        <div className='p-card'>
            <img src={test} />
            <div>
                <h2> title </h2>
                <p> description </p>
            </div>
        </div>
    )
}

export default Card