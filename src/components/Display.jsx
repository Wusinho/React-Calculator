/* eslint-disable */
import React from 'react';
import Rectangle from './Rectangle.jsx'


class RectangleDisplay extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    renderRectangle(i) {
        return (
            <Rectangle value={i} />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderRectangle(1234567890)}
                </div>

            </div>
        );
    }




}








export default RectangleDisplay