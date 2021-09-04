import NodeGroupBlack from './NodeGroupBlack'
import Desc from './Desc'
import useLocalStorage from './useLocalStorage'

const black = {
    key: 'root',
    active: true,
    left: 240,
    top: 240,
    children: [{
            key: 'a',
            active: false,
            left: 179,
            top: 210,
            children: [{
                key: 'aa',
                active: false,
                left: 90,
                top: 161,
                children: [{
                    key: 'aaa',
                    active: false,
                    left: 83,
                    top: 116,
                    children: [{
                        key: 'aaaa',
                        active: false,
                        left: 141,
                        top: 66,
                        children: []
                    }, ]
                }, ]
            }, ]
        },
        {
            key: 'b',
            active: false,
            left: 112,
            top: 270,
            children: [{
                key: 'ba',
                active: false,
                left: 26,
                top: 267,
                children: []
            }]
        },
        {
            key: 'c',
            active: false,
            left: 210,
            top: 288,
            children: [{
                key: 'ca',
                active: false,
                left: 163,
                top: 333,
                children: [{
                    key: 'caa',
                    active: false,
                    left: 155,
                    top: 414,
                    children: [{
                            key: 'caaa',
                            active: false,
                            left: 91,
                            top: 306,
                            children: []
                        },
                        {
                            key: 'caab',
                            active: false,
                            left: 234,
                            top: 371,
                            children: []
                        }
                    ]
                }]
            }]
        },
        {
            key: 'd',
            active: false,
            left: 256,
            top: 279,
            children: [{
                key: 'da',
                active: false,
                left: 300,
                top: 395,
                children: []
            }]
        },
        {
            key: 'e',
            active: false,
            left: 298,
            top: 263,
            children: [{
                key: 'ea',
                active: false,
                left: 344,
                top: 274,
                children: [{
                    key: 'eaa',
                    active: false,
                    left: 430,
                    top: 271,
                    children: [{
                        key: 'eaaa',
                        active: false,
                        left: 382,
                        top: 172,
                        children: []
                    }]
                }]
            }]
        },
    ]
}
const changeNode = (node, key) => {
    return {
        ...node,
        active: node.key === key ? !node.active : node.active,  
        children: node.children.map(child => changeNode(child, key))
    }
}

const BackgroundBlack = ({page}) => {
    const [node, setNode] = useLocalStorage('bookwatch-black', black)
    const handleNode = (key) => {
        const newNode = changeNode(node, key)
        setNode(newNode)
    }

    return <div style={{display: 'flex'}}>
        <div style={{position:'relative', width: 500, height: 500}}>
         <img src={require(`./resource/black/background.png`).default} alt='backgroud' style={{position:'absolute', width: '100%', height: '100%'}}/>
         <NodeGroupBlack node={node} handleNode={handleNode} page={page} /> 
        </div>
        <Desc node={node}/>
    </div>
}

export default BackgroundBlack