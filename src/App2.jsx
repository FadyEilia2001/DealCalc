import { useState } from 'react'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Summary from './Components/Summary'
import Table from './Components/Table'



function App() {



  function collectData(event){
    
    const {name, value} = event.target
    setDataValues(prevState=>{
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  

  //form Object
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

  // all data
  const [allDataValues, setAllDataValues] = useState([])
 

  //calc results 
  const costPerSqft =  dataValues.purchasePrice / dataValues.initialSQFT || 0
  const totalProjectCost = parseFloat(dataValues.purchasePrice) + parseFloat(dataValues.financingCosts) + parseFloat(dataValues.acquisitionCosts) + parseFloat(dataValues.constructionCosts) + parseFloat(dataValues.sellingCosts) || 0
  const totalSale = parseFloat(dataValues.salePerSqft) * parseFloat(dataValues.finalSqft) || 0
  const totalPL = totalSale - totalProjectCost || 0


  //calc button
  function buttonClick(event){
    event.preventDefault()
    setDataValues(prevState=>{
      return {
        ...prevState,
        showSummary: true
      }
    })
    setAllDataValues(prevValues=>{
        return[...prevValues,dataValues]
    })
    setDataValues({
        projectName: "",
        purchasePrice: 0,
        initialSQFT: 0,
        financingCosts: 0,
        acquisitionCosts: 0,
        sellingCosts: 0,
        constructionCosts: 0,
        finalSqft: 0,
        salePerSqft: 0,
        showSummary: true
      })

      console.log(allDataValues)
  }

  return (
    <div className="App">
        <Nav />
        <Form formData={dataValues} handleClick={collectData} btnClick={buttonClick}/>
        {!dataValues.showSummary && <h2 className='summary-title'>Summary</h2>}
        {dataValues.showSummary && <Summary costPerSqft={costPerSqft} totalCost={totalProjectCost} totalSale={totalSale} totalPL={totalPL} />}
        <div className='table'>
          <h4 className='table-title'>Summary Table</h4>
          {dataValues.showSummary && <Table data={allDataValues}/>}
        </div>
        <p className='author'>Developed By: <a href="mailto:fadyeilia0613@Gmail.com">Fady Eilia</a></p>
    </div>
  )
}

export default App


  // const formatter = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //   });