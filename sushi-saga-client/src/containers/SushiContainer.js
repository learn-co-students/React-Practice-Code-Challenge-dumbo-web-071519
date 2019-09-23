import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        { 
          props.sushis.map(sushi => <Sushi key={sushi.id} data={sushi} eatenYesNo={props.eatenYesNo} eatThisSushi={props.eatThisSushi}/> ) }
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer