import NodeGroup from './NodeGroupWhite'
import Desc from './Desc'
import useLocalStorage from './useLocalStorage'

const white = {
    key: 'root',
    active: true,
    left: 240,
    top: 240,
    children:[
        {
            key:'a',
            active: false,
            left: 238,
            top: 173,
            name: '필요로 하는 힘',
            desc: '상시 핸드 추가 : 숭고한 의무 +1장',
            children: [
                {
                    key: 'aa',
                    active: false,
                    left: 217,
                    top: 77,
                    name: '순수한 정화',
                    desc: '덱 변동 : 공허 +2장 / 상시 서경 마법 판정 +1 / 매 전투마다 일시적 마력 +1',
                    children:[
                        {
                            key: 'aaa',
                            active: false,
                            left: 286,
                            top: 46,
                            name: '필요로 하는 힘',
                            desc: '상시 핸드 추가 : 숭고한 의무 +1장',
                            children:[
                                {
                                    key: 'aaaa',
                                    active: false,
                                    name: '압도적',
                                    desc: '덱 변동 : 공허 +3장 / 덱 추가 : 용의 심장 / 공격력 +1 / 서경 장서 1개 선택 입수',
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
            left: 160,
            top: 136,
            name: '기초마력',
            desc: '상시 핸드 추가 : 도탑 또는 마탑 +1장',
            children:[{
                key:'ba',
                active:false,
                left: 97,
                top: 64,
                name: '고리와 이해',
                desc: '덱 변동 : 카드 2장 소거 / 범용 주문 장서 1개 선택 입수',
                children:[],
            },],
        },
        {
            key:'c',
            active: false,
            left: 180,
            top: 233,
            name: '권력과 힘',
            desc: '상시 핸드 추가 : 부와 권력 +1장',
            children:[
                {
                    key:'ca',
                    active: false,
                    left: 91,
                    top: 215,
                    name: '무엇보다 가까운 것',
                    desc: '계제를 1단계 높은 것으로 취급 / 상시 핸드 추가 : 용병 +1장',
                    children: [
                        {
                            key:'caa',
                            active: false,
                            left: 42,
                            top: 234,
                            name: '권력과 힘',
                            desc: '상시 핸드 추가 : 부와 권력 +1장',
                            children: [{
                                key:'caaa',
                                active: false,
                                left: 85,
                                top: 138,
                                name: '준엄',
                                desc: '덱 변동 : 공허 +2장 / 상시 원탁 마법 판정 +1 / 방어력 +1 / 원탁 장서 1개 선택 입수',
                                children: []
                            },
                            {
                                key:'caab',
                                active: false,
                                left: 85,
                                top: 294,
                                name: '신성한 강타',
                                desc: '덱 변동 : 카드 2장 소거 / 상시 원탁 마법 판정 +1 / 근원력 +1 / 강타 장서 1개 입수',
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
            name: '발상력',
            desc: '상시 핸드 추가 : 공상가 +1장',
            children: [
                {
                    key:'da',
                    active: false,
                    left: 89,
                    top: 365,
                    name: '수석',
                    desc: '덱 변동 : 공허 +2장 / 덱 추가 : 충성심 / 방어력 +1 / 학원 장서 1개 선택 입수',
                    children: []
                },
            ]
        },
        {
            key:'e',
            active: false,
            left: 237,
            top: 304,
            name: '영향력',
            desc: '상시 핸드 추가 : 최후의 승자 +1장',
            children: [
                {
                    key:'ea',
                    active: false,
                    left: 218,
                    top: 358,
                    name: '금단 의식',
                    desc: '덱 변동 : 카드 2장 소거 / 상시 핸드 추가 : [N]클래스 [소환 장서] 카드',
                    children: [
                        {
                            key:'eaa',
                            active: false,
                            left: 282,
                            top: 428,
                            name: '영향력',
                            desc: '상시 핸드 추가 : 최후의 승자 +1장',
                            children: [
                                {
                                    key:'eaaa',
                                    active: false,
                                    left: 325,
                                    top: 351,
                                    name: '플레인즈워커',
                                    desc: '3코스트 이상 소환 장서 선택 입수 / 근원력 +1',
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

const changeNode = (node, key, parentActive) => {
    return {
        ...node,
        active: node.key === key && parentActive ? !node.active : node.active,  
        children: node.children.map(child => changeNode(child, key, node.active))
    }
}

const Background = () => {
    const [node, setNode] = useLocalStorage('bookwatch-white', white)
    const handleNode = (key) => {
        const newNode = changeNode(node, key, true)
        console.log(newNode)
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