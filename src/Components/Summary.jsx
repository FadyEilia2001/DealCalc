import React from 'react'

export default function Summary(props) {
    
  const styles = {
    color: props.totalPL >= 0 ? "green" : "red",
    fontWeight: "500"
  }
  return (
    <div className='summary-section'>
        <h2 className='summary-section-title'>Latest project summary</h2>
        <p className='summary-section-results'>Cost Per SQFT = ${props.costPerSqft}</p>
        <p className='summary-section-results'>Total Project Cost = ${props.totalCost}</p>
        <p className='summary-section-results'>Expected Total Sale Price = ${props.totalSale}</p>
        <p className='summary-section-results'>Total Profit or Loss = <span style={styles}>${props.totalPL}</span></p>

        
        <button onClick={props.handleBtn} className="button-36 table-btn" >Add to table</button>
        
    </div>
  )
}
