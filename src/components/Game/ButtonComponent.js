import React from 'react';

const ButtonComponent = ({onButtonClick, onChange}) => (
    <div className="buttonWrapper">
        <button name="stay" onClick={onButtonClick} className="stay">Stay</button>
        <button name="hit" onClick={onButtonClick} onChange={onChange} className="hit">Hit</button>
    </div>
)

export default ButtonComponent;

