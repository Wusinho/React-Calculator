/* eslint-disable */
import React from 'react';

const Square = (props) => {
    return (
        <button className="square" >
            {props.value}
        </button>
    );
};

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
        return (
            <Square value={i} />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(".")}
                    {this.renderSquare(0)}
                    {this.renderSquare('=')}
                </div>
            </div>
        );
    }




}








export default Button