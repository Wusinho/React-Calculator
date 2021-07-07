/* eslint-disable */
import React from 'react';

const Rectangle = (props) => {
    return (
        <button className="rectangle" >
            {props.value}
        </button>
    );
};

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