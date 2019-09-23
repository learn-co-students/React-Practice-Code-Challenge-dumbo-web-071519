import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const addFourSushis = (props) => {
  console.log("props.sushis from sushiCont component", props.sushis)
  return(
    <div>
      <Sushi sushi={props.sushis[props.index]} />
      <Sushi sushi={props.sushis[props.index+1]} />
      <Sushi sushi={props.sushis[props.index+2]} />
      <Sushi sushi={props.sushis[props.index+3]} />
    </div>
)}

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">

            {addFourSushis(props)}

        <MoreButton
          addFourSushis={addFourSushis}
          updateIndex={props.updateIndex}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
