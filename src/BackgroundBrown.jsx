import NodeGroup from './NodeGroupBrown'
import Desc from './Desc'
import useLocalStorage from './useLocalStorage'

const brown = {
    key: 'root',
    active: false,
    left: 240,
    top: 240,
    children:[
        {
            key: 'a',
            active: false,
            left: 176,
            top: 198,
            children:[
                {
                    key: 'aa',
                    active: false,
                    left: 96,
                    top: 144,
                    children:[
                        {
                            key: 'aaa',
                            active: false,
                            left: 44,
                            top: 176,
                            children:[
                                {
                                    key: 'aaaa',
                                    active: false,
                                    left: 45,
                                    top: 242,
                                    children:[]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            key: 'b',
            active: false,
            left: 217,
            top: 188,
            children:[
                {
                    key: 'ba',
                    active: false,
                    left: 151,
                    top: 28,
                    children:[]
                }
            ]
        },
        {
            key: 'c',
            active: false,
            left: 266,
            top: 184,
            children:[
                {
                    key: 'ca',
                    active: false,
                    left: 283,
                    top: 107,
                    children:[
                        {
                            key: 'caa',
                            active: false,
                            left: 334,
                            top: 67,
                            children:[
                                {
                                    key: 'caaa',
                                    active: false,
                                    left: 217,
                                    top: 60,
                                    children:[]
                                },
                                {
                                    key: 'caab',
                                    active: false,
                                    left: 350,
                                    top: 139,
                                    children:[]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            key: 'd',
            active: false,
            left: 362,
            top: 215,
            children:[
                {
                    key: 'da',
                    active: false,
                    left: 413,
                    top: 187,
                    children:[]
                }
            ]
        },
        {
            key: 'e',
            active: false,
            left: 289,
            top: 267,
            children:[
                {
                    key: 'ea',
                    active: false,
                    left: 338,
                    top: 285,
                    children:[
                        {
                            key: 'eaa',
                            active: false,
                            left: 375,
                            top: 368,
                            children:[
                                {
                                    key: 'eaaa',
                                    active: false,
                                    left: 274,
                                    top: 373,
                                    children:[]
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

const BackgroundBrown = () => {
    const [node, setNode] = useLocalStorage('bookwatch-brown', brown)
    const handleNode = (key) => {
        const newNode = changeNode(node, key)
        setNode(newNode)
    }

    return <div style={{display: 'flex'}}>
        <div style={{position:'relative', width: 500, height: 500}}>
         <img src={require(`./resource/brown/background.png`).default} alt='backgroud' style={{position:'absolute', width: '100%', height: '100%'}}/>
         <NodeGroup node={node} handleNode={handleNode} /> 
        </div>
        <Desc node={node}/>
    </div>
}

export default BackgroundBrown