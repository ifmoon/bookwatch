import NodeGroup from './NodeGroupBrown'
import Desc from './Desc'
import useLocalStorage from './useLocalStorage'

const brown = {
    key: 'root',
    active: true,
    left: 240,
    top: 240,
    children:[
        {
            key: 'a',
            active: false,
            left: 176,
            top: 198,
            name: '수집가',
            desc: '상시 핸드 추가 : 이색증 +1장',
            children:[
                {
                    key: 'aa',
                    active: false,
                    left: 96,
                    top: 144,
                    name: '유연한 사고',
                    desc: '덱 변동 : 카드 소거 2장 / 상시 사서 마법 판정 +1 / 조사 판정 시 펌블 없음',
                    children:[
                        {
                            key: 'aaa',
                            active: false,
                            left: 44,
                            top: 176,
                            name: '수집가',
                            desc: '상시 핸드 추가 : 이색증 +1장',
                            children:[
                                {
                                    key: 'aaaa',
                                    active: false,
                                    left: 45,
                                    top: 242,
                                    name: '마인',
                                    desc: '덱 변동 : 공허 +3장 / 덱 추가 : [금서 입수] 카드 랜덤 1장 / 공격력 +1 / 사서 장서 1개 선택 입수',
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
            name: '집행',
            desc: '상시 핸드 추가 : 엽견의 그림자 +1장',
            children:[
                {
                    key: 'ba',
                    active: false,
                    left: 151,
                    top: 28,
                    name: '송곳니',
                    desc: '덱 변동 : 공허 +3장 / 덱 추가 : 검투사 카드 +1장 / 공격력 + 1 / 엽귀 장서 1개 입수',
                    children:[]
                }
            ]
        },
        {
            key: 'c',
            active: false,
            left: 266,
            top: 184,
            name: '집시',
            desc: '상시 핸드 추가 : 어릿광대 +1장',
            children:[
                {
                    key: 'ca',
                    active: false,
                    left: 283,
                    top: 107,
                    name: '최면술',
                    desc: '공격력 +1 / 상시 아방궁 마법 판정 +1 / 덱 변동 : 랜덤한 카드 +1장',
                    children:[
                        {
                            key: 'caa',
                            active: false,
                            left: 334,
                            top: 67,
                            name: '집시',
                            desc: '상시 핸드 추가 : 어릿광대 +1장',
                            children:[
                                {
                                    key: 'caaa',
                                    active: false,
                                    left: 217,
                                    top: 60,
                                    name: '계몽',
                                    desc: '덱 변동 : 공허 +2장 / 상시 아방궁 마법 판정 +1 / 방어력 +1 / 아방궁 장서 1개 선택 입수',
                                    children:[]
                                },
                                {
                                    key: 'caab',
                                    active: false,
                                    left: 350,
                                    top: 139,
                                    name: '융합',
                                    desc: '덱 변동 : 카드 2장 소거 / 상시 아방궁 마법 판정 +1 / 근원력 +1 / 개조 장서 1개 입수',
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
            name: '플라스크',
            desc: '상시 핸드 추가 : 연금술 +1장',
            children:[
                {
                    key: 'da',
                    active: false,
                    left: 413,
                    top: 187,
                    name: '대규모 실험',
                    desc: '덱 변동 : 카드 2장 소거 / 범용 장비 장서 1개 입수',
                    children:[]
                }
            ]
        },
        {
            key: 'e',
            active: false,
            left: 289,
            top: 267,
            name: '마법적 지식',
            desc: '상시 핸드 추가 : 맹렬한 화염 또는 바루나스트라 카드 +1장',
            children:[
                {
                    key: 'ea',
                    active: false,
                    left: 338,
                    top: 285,
                    name: '격류하는 마력',
                    desc: '덱 변동 : 공허 2장 추가 / 범용 주문 장서 1개 선택 입수',
                    children:[
                        {
                            key: 'eaa',
                            active: false,
                            left: 375,
                            top: 368,
                            name: '마법적 지식',
                            desc: '상시 핸드 추가 : 맹렬한 화염 또는 바루나스트라 카드 +1장',
                            children:[
                                {
                                    key: 'eaaa',
                                    active: false,
                                    left: 274,
                                    top: 373,
                                    name: '죽어가는 빛',
                                    desc: '덱 변동 : 공허 4장 추가 / 상시 핸드 추가 : 죽어가는 빛 카드 +1장 / 마소 최대 충전치 두 배',
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