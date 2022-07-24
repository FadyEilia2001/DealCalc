import React from 'react'

export default function Summary(props) {
    
  return (
    <div className='summary-section'>
        <h2 className='summary-section-title'>Summary</h2>
        <p className='summary-section-results'>Cost Per SQFT = ${props.costPerSqft}</p>
        <p className='summary-section-results'>Total Project Cost = ${props.totalCost}</p>
        <p className='summary-section-results'>Expected Total Sale Price = ${props.totalSale}</p>
        <p className='summary-section-results'>Total Profit or Loss = ${props.totalPL}</p>



    </div>
  )
}
