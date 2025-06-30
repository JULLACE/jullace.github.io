import MediaCard from "../components/MediaCard"

const About = () => {
    return (
        <div className="content">
            <hr></hr>
            <h1> who </h1>
            <p> hi :) 
                <br /> 
                <br />
                i'm a software engineer 
                (mainly fullstack) from Florida
                who enjoys exploring the world and
                realizing how little i know!
                <br />
                <br />
                some random fun facts:
                <ul>
                    <li> studied abroad in japan twice </li>
                    <li> loves to play basketball, but sucks at it </li>
                    <li> goes on random video editing sprees </li>
                    <li> wants to form an ultimate retro game collection </li>
                </ul>
            </p>
            <h1> follow / contact </h1>
            <div className="media-list">
                <MediaCard content={'Linkedin'}/>
                <MediaCard content={'GitHub'}/>
                <MediaCard content={'Email'}/>
            </div>
        </div>
    )
}

export default About