import { useState } from 'react'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Summary from './Components/Summary'




function App() {

  // const formatter = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //   });

  function collectData(event){
    
    const {name, value, type} = event.target
    setDataValues(prevState=>{
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  function buttonClick(event){
    event.preventDefault()
    setDataValues(prevState=>{
      return {
        ...prevState,
        showSummary: !prevState.showSummary
      }
    })
  }


  const [dataValues, setDataValues] = useState({
    projectName: "",
    purchasePrice: 0,
    initialSQFT: 0,
    financingCosts: 0,
    acquisitionCosts: 0,
    sellingCosts: 0,
    constructionCosts: 0,
    finalSqft: 0,
    salePerSqft: 0,
    showSummary: false
  })
 
  const costPerSqft =  dataValues.purchasePrice / dataValues.initialSQFT || 0
  const totalProjectCost = parseFloat(dataValues.purchasePrice) + parseFloat(dataValues.financingCosts) + parseFloat(dataValues.acquisitionCosts) + parseFloat(dataValues.constructionCosts) + parseFloat(dataValues.sellingCosts) || 0
  const totalSale = dataValues.salePerSqft * dataValues.finalSqft || 0
  const totalPL = totalSale - totalProjectCost || 0
  

  return (
    <div className="App">
        <Nav />
        <Form formData={dataValues} handleClick={collectData} btnClick={buttonClick}/>
        {!dataValues.showSummary && <h2 className='summary-title'>Summary</h2>}
        {dataValues.showSummary && <Summary costPerSqft={costPerSqft} totalCost={totalProjectCost} totalSale={totalSale} totalPL={totalPL} />}
    </div>
  )
}

export default App


//{!dataValues.showSummary && <h2 className='summary-title'>Summary</h2>}

//need to complete summary report with the following data
//also need to format it

// Output Report

// 	• Price Per SQFT - complete
// 	• After repair cost Per SQFT
// 	• Expected sale price per SQFT

// 	• Total Project Costs
// 	• Total Cash Needed
// 	• Profit/Loss amount
// ROI

//deploy React App
// https://www.youtube.com/watch?v=Q9n2mLqXFpU
