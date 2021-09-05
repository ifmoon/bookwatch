import { useSpring,  animated } from 'react-spring'

const Desc = () => {
    const title = useSpring({ from: {opacity: 0}, to: {opacity: 1}, delay: 500,config: {duration: 500}})
    const p1 = useSpring({ from: {opacity: 0}, to: {opacity: 1}, delay: 1000,config: {duration: 500}})
    const p2 = useSpring({ from: {opacity: 0}, to: {opacity: 1},delay: 1500, config: {duration: 500}})
    const p3 = useSpring({ from: {opacity: 0}, to: {opacity: 1},delay: 2000, config: {duration: 500}})
    const p4 = useSpring({ from: {opacity: 0}, to: {opacity: 1},delay: 3000, config: {duration: 500}})
    
    return <div style={{marginLeft:12}}>
        <div style={{width: '40vw', display: 'flex', flexDirection: 'column', 'alignItems':'center'}}>
        <animated.div style={title}>
            <p style={{fontWeight: 700, fontSize: '18pt'}}>B O O K W A T C H</p>
        </animated.div>
        <animated.div style={p1}>
            <p style={{fontWeight: 400, fontSize: '14pt'}}>마법사,</p>
        </animated.div>
        <animated.div style={p2}> 
            <p style={{fontWeight: 400, fontSize: '14pt'}}>서적경,</p>
        </animated.div>
        <animated.div style={p3}>  
            <p style={{fontWeight: 400, fontSize: '14pt'}}>여신,</p>
        </animated.div>
        <animated.div style={p4}>
            <p style={{fontWeight: 500, fontSize: '14pt'}}>그리고 사람.</p>
        </animated.div>
        
        </div>
    </div>
}

export default Desc