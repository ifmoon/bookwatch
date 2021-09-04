
const node= {
    key: 'root',
    active: true,
    children:[
        {
            key:'a',
            active: false,
            children: [
                {
                    key: 'aa',
                    active: false,
                    children:[],
                }
            ]
            
        },
        {
            key:'b',
            active:false,
            children:[],
        },
        {
            key:'c',
            children:[
                {
                    key:'ca',
                    active: false,
                    children: [
                        {
                            key:'caa',
                            active: false,
                            children: []
                        },
                        {
                            key:'cab',
                            active: false,
                            children: []
                        },
                        {
                            key:'cac',
                            active: false,
                            children: []
                        },
                    ]
                }
            ],
        }
    ]
}

const q = [node];
    
const findNode = (key) => {
    
    while(q.length > 0) {
        const node = q.pop();
        if (node.key === key) {
            return node
        }
        
        node.children.forEach(child => {
            q.push(child)
        });
    }

    return null;
}



console.log(findNode('cac', node))