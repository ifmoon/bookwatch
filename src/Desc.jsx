const getActiveDesc = (nodes) => {
    const queue = [nodes]
    const res = []
       
    while(queue.length > 0) {
        const node = queue.pop();
        if (node.active && node.key !== 'root') {
            res.push({name: node.key, desc: '테스트'})
        }
        
        node.children.forEach(child => {
            queue.push(child)
        });
    }

    return res;
}

const Desc = ({node}) => {
    return <div style={{marginLeft:12}}>
        {getActiveDesc(node).map(n => 
        <div style={{borderBottom: 'solid 1px #ccc', width: '40vw'}}>
            <p style={{fontWeight: 700, fontSize: '18pt'}}>집중</p>
            <p style={{fontWeight: 700, fontSize: '14pt'}}>집중하세요 제발</p>
        </div>)}
    </div>
}

export default Desc