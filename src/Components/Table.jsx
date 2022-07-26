import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
  
// ];

export default function DataTable(props) {

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'delete', headerName: 'delete', width:100},
    { field: 'projectName', headerName: 'Project Title', width: 130 },
    { field: 'purchasePrice', headerName: 'Purchase Price', width: 130 },  
    { field: 'initialSQFT', headerName: 'Initial SQFT', width: 130 }, 
    { field: 'costPerSqft', headerName: 'Cost per SQFT', width: 130 }, 
    { field: 'financingCosts', headerName: 'Financing Costs', width: 130 },
    { field: 'acquisitionCosts', headerName: 'Acquisition Costs', width: 130 },
    { field: 'constructionCosts', headerName: 'Construction Costs', width: 130 },
    { field: 'sellingCosts', headerName: 'Selling Costs', width: 130 },
    { field: 'totalProjectCost', headerName: 'Total Cost', width: 130 },
    { field: 'finalSqft', headerName: 'Final SQFT', width: 130 },
    { field: 'salePerSqft', headerName: 'Sale price per SQFT', width: 130 },
    { field: 'totalSale', headerName: 'Selling Price', width: 130 },
    { field: 'totalPL', headerName: 'Profit / Loss', width: 130 },
  ];


 

const row2 = props.data.map((item, index)=>{
    return { 
      id: `${index + 1}`, 
      projectName: item.projectName, 
      purchasePrice: item.purchasePrice, 
      initialSQFT: item.initialSQFT ,
      financingCosts: item.financingCosts,
      acquisitionCosts: item.acquisitionCosts,
      constructionCosts: item.constructionCosts,
      sellingCosts: item.sellingCosts, 
      finalSqft: item.finalSqft,
      salePerSqft: item.salePerSqft,
      costPerSqft: item.costPerSqft,
      totalProjectCost: item.totalProjectCost,
      totalSale: item.totalSale,
      totalPL: item.totalPL,
      
    }
})



  return (
    <div style={{ height: 400, width: '100%' }}>
        
      <DataGrid
        rows={row2}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
