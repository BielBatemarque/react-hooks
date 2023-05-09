import React from "react";

const UseCallbackButtons = (props) => {
    console.log('rederizou...')
    return(
        <div>
        <button className='bnt' onClick={() => props.inc(6)}>+6</button>
        <button className='bnt' onClick={() => props.inc(12)}>+12</button>
        <button className='bnt' onClick={() => props.inc(18)}>+18</button>
    </div>
    );
}

export default React.memo(UseCallbackButtons);