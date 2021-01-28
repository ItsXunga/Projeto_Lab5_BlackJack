import React, {useState} from 'react';

const BetInput = ({setBet}) => {

    const [value, setValue] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        setBet(value);
        setValue(" ");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" className="betInput" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}

export default BetInput;

