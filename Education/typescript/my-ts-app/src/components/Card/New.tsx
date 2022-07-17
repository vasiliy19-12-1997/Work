import React, { Component } from 'react';

class New extends React.Component {
    constructor(props:object){
    super(props);
    this.state={date: new Date()}
    }


}



    render() {
        return (
            <div>
                <h1>Helo</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default New;


