import Desc from './IntroDesc'
import { useSpring, animated } from 'react-spring'
const Background = () => {
    const props = useSpring({from: { rotateZ: -180, opacity: 0 }, to: { rotateZ: 0, opacity: 1 },config: {duration:2800}})
    return <div style={{display: 'flex'}}>
        <animated.div style={props}>
        <div style={{position:'relative', width: 500, height: 500}}>
            <img src={require(`./resource/background.png`).default} alt='backgroud' style={{position:'absolute', width: '100%', height: '100%'}}/>
        </div>     
        </animated.div>

        <Desc />
    </div>
}

export default Background