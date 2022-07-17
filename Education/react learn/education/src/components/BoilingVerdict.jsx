import React from 'react';

const BoilingVerdict = () => {
    function BoilingVerdict(props){
        if(props.ceils >=100){
          return <p>Вода закипит</p>
        }else return (
          <p>Вода не закипит</p>
        )
      }
    return (
        <div>
            
        </div>
    );
};

export default BoilingVerdict;