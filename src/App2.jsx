import { useState } from 'react'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Summary from './Components/Summary'
import Table from './Components/Table'



function App() {



  function collectData(event) {

    const { name, value } = event.target
    setDataValues(prevState => {
      return {
        ...prevState,
        [name]: value,
        showSummary: false
      }
    })
  }



  //form Object
  const [dataValues, setDataValues] = useState({
    projectName: "",
    purchasePrice: 1,
    initialSQFT: 1,
    financingCosts: 1,
    acquisitionCosts: 1,
    sellingCosts: 1,
    constructionCosts: 1,
    finalSqft: 1,
    salePerSqft: 1,
    showSummary: false,
    showTable: false
  })

  // all data
  const [allDataValues, setAllDataValues] = useState((JSON.parse(localStorage.getItem("data"))) || [])


  //calc results 
  const costPerSqft = dataValues.purchasePrice / dataValues.initialSQFT || 0
  const totalProjectCost = parseFloat(dataValues.purchasePrice) + parseFloat(dataValues.financingCosts) + parseFloat(dataValues.acquisitionCosts) + parseFloat(dataValues.constructionCosts) + parseFloat(dataValues.sellingCosts) || 0
  const totalSale = parseFloat(dataValues.salePerSqft) * parseFloat(dataValues.finalSqft) || 0
  const totalPL = totalSale - totalProjectCost || 0


  //calc button
  function buttonClick(event) {
    //prevent defualt refresh
    event.preventDefault()

    //create summary
    setDataValues(prevState=>{
      return{
        ...prevState,
        costPerSqft: costPerSqft,
        totalProjectCost: totalProjectCost,
        totalSale: totalSale,
        totalPL: totalPL,
      }
    })

    //show summary
    setDataValues(prevState => {
      return {
        ...prevState,
        showSummary: true,
        costPerSqft: costPerSqft,
        totalProjectCost: totalProjectCost,
        totalSale: totalSale,
        totalPL: totalPL,
      }
    })
  }

  

  function addToTable(){


    setAllDataValues(prevValues => {
      return [...prevValues, dataValues]
    })

    setDataValues(prevState => {
      return {
        ...prevState,
        showTable: true
      }
    })

    localStorage.setItem("data", JSON.stringify(allDataValues))
  }

  return (
    <div className="App">
      <Nav />
      <Form formData={dataValues} handleClick={collectData} btnClick={buttonClick} />
      
      {dataValues.showSummary && <Summary handleBtn={addToTable} costPerSqft={costPerSqft} totalCost={totalProjectCost} totalSale={totalSale} totalPL={totalPL} />}
      {dataValues.showTable && <div className='table'>
          <Table data={allDataValues} costPerSqft={costPerSqft}/>
        </div>
        }
      
      <p className='author'>Developed By: <a href="mailto:fadyeilia0613@Gmail.com">Fady Eilia</a></p>
    
    </div>
  )
}

export default App


  // const formatter = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //   });