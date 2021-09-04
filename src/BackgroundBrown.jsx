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
            name: '플라스크',
            desc: '상시 핸드 추가 : 연금술 +1장',
            children:[
                {
                    key: 'aa',
                    active: false,
                    left: 96,
                    top: 144,
                    name: '숙달의 과정',
                    desc: '덱 변동 : 카드 2장 소거 / [범용] 외 장비 장서 1개 선택 입수',
                    children:[
                        {
                            key: 'aaa',
                            active: false,
                            left: 44,
                            top: 176,
                            name: '플라스크',
                                    desc: '상시 핸드 추가 : 연금술 +1장',
                            children:[
                                {
                                    key: 'aaaa',
                                    active: false,
                                    left: 45,
                                    top: 242,
                                    name: '만병지왕',
                                    desc: '덱 변동 : 공허 +3장 / [검] 이름을 포함한 장서 1개 선택 입수 / [마검 소환]이 반드시 성공함 / 공격력 + 1 / 프라이즈 획득',
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
            name: '깨달음',
            desc: '상시 핸드 추가 : 계몽된 자 +1장',
            children:[
                {
                    key: 'ba',
                    active: false,
                    left: 151,
                    top: 28,
                    name: '개안',
                    desc: '덱 변동 : 공허 +3장 / 매 전투마다 일시적 마력 +1 / 특기 변동 : 랜덤한 특기 1개 입수',
                    children:[]
                }
            ]
        },
        {
            key: 'c',
            active: false,
            left: 266,
            top: 184,
            name: '색안',
            desc: '상시 핸드 추가 : 측량사 +1장',
            children:[
                {
                    key: 'ca',
                    active: false,
                    left: 283,
                    top: 107,
                    name: '완전범죄',
                    desc: '방어력 +1 / 상시 문호 마법 판정 +1 / 매 세션 펌블 1회 무효',
                    children:[
                        {
                            key: 'caa',
                            active: false,
                            left: 334,
                            top: 67,
                            name: '색안',
                            desc: '상시 핸드 추가 : 측량사 +1장',
                            children:[
                                {
                                    key: 'caaa',
                                    active: false,
                                    left: 217,
                                    top: 60,
                                    name: '연쇄반응',
                                    desc: '덱 변동 : 공허 +2장 / 상시 입회인 판정 +1 / 공격력 +1 / 연쇄 장서 1개 입수',
                                    children:[]
                                },
                                {
                                    key: 'caab',
                                    active: false,
                                    left: 350,
                                    top: 139,
                                    name: '그림자에서 태어나다',
                                    desc: '덱 변동 : 카드 소거 2장 / 상시 입회인 판정 +1 / 근원력 +1 / 상시 핸드 추가 : 집필가 +1장',
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
            name: '순례자',
            desc: '상시 핸드 추가 : 무모한 모험 +1장',
            children:[
                {
                    key: 'da',
                    active: false,
                    left: 413,
                    top: 187,
                    name: '삼위일체',
                    desc: '상시 적용 : 보유 장서의 3종의 숫자가 전부 같으면, 공격력, 방어력, 근원력, 마력 +1 추가',
                    children:[]
                }
            ]
        },
        {
            key: 'e',
            active: false,
            left: 289,
            top: 267,
            name: '야만인',
            desc: '상시 핸드 추가 : 루나리스의 여사제 +1장',
            children:[
                {
                    key: 'ea',
                    active: false,
                    left: 338,
                    top: 285,
                    name: '마석학',
                    desc: '덱 변동 : 카드 소거 2장 / 매 세션 시작 시 장서 1개에 [추가데미지1] 부여, 중첩 불가능 / 공격력 +1',
                    children:[
                        {
                            key: 'eaa',
                            active: false,
                            left: 375,
                            top: 368,
                            name: '야만인',
                            desc: '상시 핸드 추가 : 루나리스의 여사제 +1장',
                            children:[
                                {
                                    key: 'eaaa',
                                    active: false,
                                    left: 274,
                                    top: 373,
                                    name: '마석여왕',
                                    desc: '덱 변동 : 카드 소거 2장 / 매 세션 시작 시 장서 1개에 [코스트 –1] 부여, 중첩 불가능 / 외전 장서 1개 선택 입수',
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

const changeNode = (node, key, parentActive) => {
    return {
        ...node,
        active: node.key === key && parentActive ? !node.active : node.active,  
        children: node.children.map(child => changeNode(child, key, node.active))
    }
}

const BackgroundBrown = () => {
    const [node, setNode] = useLocalStorage('bookwatch-brown', brown)
    const handleNode = (key) => {
        const newNode = changeNode(node, key, true)
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