import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);
    const increment = () =>{
        setLikes(likes +1)
    }
    const decrement = () =>{
        setLikes(likes -1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;