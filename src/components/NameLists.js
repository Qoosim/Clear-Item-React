import React from 'react'

function NameLists(props) {
    return (
        <div className="container">
          <h5 
            className="item text-capitalize m-4">
            {props.name}
          </h5>  
        </div>
    )
}


export default NameLists
