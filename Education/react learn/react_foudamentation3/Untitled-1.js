const check = (row)=>{
    const stack = [];
    for(let i =0; i<row.length; i++){
        const bracket =row[i];
        if(bracket === '(') {
            stack.push(bracket);
        }else {
            const lastEl = stack.pop();
            if(!lastEl) {
                return false
            } 
        }

    }
    if (stack.length !== 0) console.log(false) ;
     console.log(true);
}
check('()()(');