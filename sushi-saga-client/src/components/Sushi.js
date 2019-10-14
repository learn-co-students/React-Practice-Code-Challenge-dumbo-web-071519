import React, { Fragment } from 'react'

const Sushi = ({sushi, eaten, eatSushi, budget}) => {
  // console.log(sushi)

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(sushi)}>
        { 
          eaten.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      {
        budget >= 1 ?
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
      : <h4 className="sushi-details">
      {sushi.name} - Too expensive for you
      </h4>
      }
      
    </div>
  )
}

export default Sushi