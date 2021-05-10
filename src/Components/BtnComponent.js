import React from 'react';

function BtnComponent(props) {
    return (
        <div className="main-btns">
          {(props.status === 0)?
            <button onClick={props.start}>Start</button> : ""
          }

          {(props.status === 1)?
            <div className="double__btns">
              <button onClick={props.stop}>Stop</button> 
              <button onClick={props.reset}>Reset</button> 
            </div> : ""
          }

          {(props.status === 2)?
            <div className="double__btns">
              <button onClick={props.resume}>Resume</button> 
              <button onClick={props.reset}>Reset</button> 
            </div> : ""
          }

        </div>
    );
}

export default BtnComponent;