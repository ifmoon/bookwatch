import NodeGroup from './NodeGroupWhite'
import Desc from './Desc'
import useLocalStorage from './useLocalStorage'

const white = {
    key: 'root',
    active: false,
    left: 240,
    top: 240,
    children:[
        {
            key:'a',
            active: false,
            left: 238,
            top: 173,
            children: [
                {
                    key: 'aa',
                    active: false,
                    left: 217,
                    top: 77,
                    children:[
                        {
                            key: 'aaa',
                            active: false,
                            left: 286,
                            top: 46,
                            children:[
                                {
                                    key: 'aaaa',
                                    active: false,
                                    left: 325,
                                    top: 88,
                                    children:[],
                                }
                            ],
                        }
                    ],
                }
            ]
            
        },
        {
            key:'b',
            active:false,
            left: 156,
            top: 134,
            children:[{
                key:'ba',
                active:false,
                left: 97,
                top: 64,
                children:[],
            },],
        },
        {
            key:'c',
            active: false,
            left: 180,
            top: 233,
            children:[
                {
                    key:'ca',
                    active: false,
                    left: 91,
                    top: 215,
                    children: [
                        {
                            key:'caa',
                            active: false,
                            left: 42,
                            top: 234,
                            children: [{
                                key:'caaa',
                                active: false,
                                left: 85,
                                top: 138,
                                children: []
                            },
                            {
                                key:'caab',
                                active: false,
                                left: 85,
                                top: 294,
                                children: []
                            },]
                        },
                    ]
                }
            ],
        },
        {
            key:'d',
            active: false,
            left: 205,
            top: 273,
            children: [
                {
                    key:'da',
                    active: false,
                    left: 89,
                    top: 365,
                    children: []
                },
            ]
        },
        {
            key:'e',
            active: false,
            left: 237,
            top: 304,
            children: [
                {
                    key:'ea',
                    active: false,
                    left: 218,
                    top: 358,
                    children: [
                        {
                            key:'eaa',
                            active: false,
                            left: 282,
                            top: 428,
                            children: [
                                {
                                    key:'eaaa',
                                    active: false,
                                    left: 325,
                                    top: 351,
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const changeNode = (node, key) => {
    return {
        ...node,
        active: node.key === key ? !node.active : node.active,  
        children: node.children.map(child => changeNode(child, key))
    }
}

const Background = () => {
    const [node, setNode] = useLocalStorage('bookwatch-white', white)
    const handleNode = (key) => {
        const newNode = changeNode(node, key)
        setNode(newNode)
    }

    return <div style={{display: 'flex'}}>
        <div style={{position:'relative', width: 500, height: 500}}>
         <img src={require(`./resource/white/background.png`).default} alt='backgroud' style={{position:'absolute', width: '100%', height: '100%'}}/>
         <NodeGroup node={node} handleNode={handleNode} /> 
        </div>
        <Desc node={node}/>
    </div>
}

export default Background