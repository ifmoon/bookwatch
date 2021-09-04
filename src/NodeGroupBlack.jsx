
const Node = ({left,top, id, active, handleNode}) => {
    if (id === 'root') return null;
    
    return <div 
    style={{position:'absolute', left, top}}
    onClick={()=>handleNode(id)}
    ><img src={require(`./resource/black/${id}.png`).default} alt={id} style={{opacity: active ? 100 : 0}}/></div>
}

const renderNode = (node, handleNode) => {
    return <>
        <Node left={node.left} top={node.top} id={node.key} active={node.active} handleNode={handleNode} key={node.key} />
        {node.children && node.children.map(child => renderNode(child, handleNode))}
    </>
}

const NodeGroup = ({node, handleNode}) => {
    return <div style={{position:'absolute', width:500, height:500}}>
        {renderNode(node, handleNode)}
    </div>
}

export default NodeGroup;
