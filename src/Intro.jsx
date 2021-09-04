import Desc from './IntroDesc'

const Background = () => {

    return <div style={{display: 'flex'}}>
        <div style={{position:'relative', width: 500, height: 500}}>
            <img src={require(`./resource/background.png`).default} alt='backgroud' style={{position:'absolute', width: '100%', height: '100%'}}/>
        </div>     
        <Desc />
    </div>
}

export default Background