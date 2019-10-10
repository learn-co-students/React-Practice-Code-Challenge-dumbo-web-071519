import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushiYesNo(props.sushi)
           ?
            null 
          :
            <img onClick={() => props.itemClicked(props.sushi)} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi