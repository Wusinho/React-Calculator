/* eslint-disable */
import React from 'react';

const Square = (props) => {
    return (
        <button className="square" >
            {/* {props.value} */}
        </button>
    );
};

class Button extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     squares: Array(9).fill(null),
        // };
    }

    renderSquare(i) {
        return (
            <Square />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }




}








export default Button