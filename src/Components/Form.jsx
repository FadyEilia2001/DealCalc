import React from 'react'

export default function Form(props) {
  
    
    return (
    <form>
        <div className="form-inputs">
        <div className='project-costs section'>
            <h2 className='section-title'>Project Costs</h2>
            <label className='label' htmlFor="projectName">Project Name
            <input
                className='input'
                type="text"
                placeholder="Title..."
                name="projectName"
                onChange={props.handleClick}
                value = {props.formData.projectName}
                required
                
            />
            </label>

            <label className='label' htmlFor="purchasePrice">Purchase Price
            <input
                className='input'
                type="number"
                step={1000}
                placeholder="Project Purchase Price"
                name="purchasePrice"
                onChange={props.handleClick}
                value = {props.formData.purchasePrice}
                required
                
            />
            </label>

            <label className='label' htmlFor="initialSQFT">Total Square Footage
            <input
                className='input'
                type="number"
                step={1000}
                placeholder="Total purchase SQFT"
                name="initialSQFT"
                onChange={props.handleClick}
                value = {props.formData.initialSQFT}
                
            />
            </label>

            <label className='label' htmlFor="financingCosts">Financing Costs
            <input
                className='input'
                type="number"
                step={1000}
                placeholder="Total financing Costs"
                name="financingCosts"
                onChange={props.handleClick}
                value = {props.formData.financingCosts}  
            />
            </label>

            <label className='label' htmlFor="acquisitionCosts">Acquisition Costs
            <input
                className='input'
                type="number"
                step={1000}
                placeholder="Total Acquisition Costs"
                name="acquisitionCosts"
                onChange={props.handleClick}
                value = {props.formData.acquisitionCosts}  
            />
            </label>

            <label className='label' htmlFor="constructionCosts">Construction Costs
            <input
                className='input'
                type="number"
                step={1000}
                placeholder="Total construction Costs"
                name="constructionCosts"
                onChange={props.handleClick}
                value = {props.formData.constructionCosts}  
            />
            </label>

            <label className='label' htmlFor="sellingCosts">Selling Costs
            <input
                className='input'
                type="number"
                placeholder="Total Selling Costs"
                name="sellingCosts"
                onChange={props.handleClick}
                value = {props.formData.sellingCosts}  
            />
            </label>

        </div>
        
        <div className="sale-price section">
        <h2 className='section-title sale-title'>Sale Price</h2>

            <label className='label' htmlFor="finalSqft">After repair/build Total SQFT
                <input
                    className='input'
                    type="number"
                    step={1000}
                    placeholder="Final Product Total SQFT"
                    name="finalSqft"
                    onChange={props.handleClick}
                    value = {props.formData.finalSqft}  
                />
                </label>

                <label className='label' htmlFor="salePerSqft">Sale price per SQFT
                <input
                    className='input'
                    type="number"
                    step={1000}
                    placeholder="Expected Sale Price"
                    name="salePerSqft"
                    onChange={props.handleClick}
                    value = {props.formData.salePerSqft}  
                />
                </label>
        </div>

        </div>

        <div className="button-container">
                <button onClick={props.btnClick} className="button-36" >Calculate</button>
            </div>
            
        
    </form>
  )
}


// <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />