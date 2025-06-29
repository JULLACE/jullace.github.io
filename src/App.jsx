import pfp from './assets/pfp.png'

const App = () => {
  return (
    <div className='main'>
      <div className='items'>
        <a href='https://dreamcatalogue.bandcamp.com/album/rain-temple'><img src={pfp} /></a>
        <span className='subtitle'>From Rain Temple by 2814, <br></br> a favorite of mine</span>
        <p className='title'> JULLACE </p>

        <ol>
          <li>about</li>
          <li>projects</li>
          <li>blog</li>
        </ol>
      </div>
    </div>
  )
}

export default App