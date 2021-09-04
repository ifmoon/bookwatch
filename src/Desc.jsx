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
    return <div style={{overflow: 'scroll'}}>
        {getActiveDesc(node).map(n => <><li style={{fontSize: '12pt'}}>{n.name}<ul><li>{n.desc}</li></ul></li></>)}
    </div>
}

export default Desc