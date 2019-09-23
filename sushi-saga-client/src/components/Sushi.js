// import React, { Fragment } from 'react'
import React, { Component } from 'react';


class Sushi extends Component {

  
  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={/* Give me a callback! */ null}>
          {
            /* Tell me if this sushi has been eaten! */
            true ?
              null
            :
              <img src={null} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {/* Give me a name! */} - ${/* Give me a price! */}
        </h4>
      </div>
    )
  }
}

export default Sushi
