import { Scrollbars } from 'react-custom-scrollbars';

const getActiveDesc = (nodes) => {
    const queue = [nodes]
    const res = []
       
    while(queue.length > 0) {
        const node = queue.pop();
        if (node.active && node.key !== 'root') {
            res.push({name: node.name, desc: node.desc})
        }
        
        node.children.forEach(child => {
            queue.push(child)
        });
    }

    return res;
}

const Desc = ({node}) => {
    return <div style={{marginLeft:12}}>
        <Scrollbars style={{ width: '40vw', height: '90vh' }}>
            {getActiveDesc(node).map(n => 
            <div style={{borderBottom: 'solid 1px #ccc', width: '100%'}}>
                <p style={{fontWeight: 700, fontSize: '18pt'}}>{n.name}</p>
                <p style={{fontWeight: 400, fontSize: '14pt'}}>{n.desc}</p>
            </div>)}
        </Scrollbars>
    </div>
}

export default Desc