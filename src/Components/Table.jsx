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
    { field: 'projectName', headerName: 'Project Title', width: 130 },
    { field: 'purchasePrice', headerName: 'Purchase Price', width: 130 },  
    { field: 'initialSQFT', headerName: 'Initial SQFT', width: 130 },  
    { field: 'financingCosts', headerName: 'Financing Costs', width: 130 },
    { field: 'acquisitionCosts', headerName: 'Acquisition Costs', width: 130 },
    { field: 'constructionCosts', headerName: 'Construction Costs', width: 130 },
    { field: 'sellingCosts', headerName: 'Selling Costs', width: 130 },
    { field: 'finalSqft', headerName: 'Final SQFT', width: 130 },
    { field: 'salePerSqft', headerName: 'Sale price per SQFT', width: 130 },
  ];

const rows = [
    { 
        id: 1, 
        projectName: "", 
        purchasePrice: props.data[0].purchasePrice, 
        initialSQFT: props.data[0].initialSQFT ,
        financingCosts: props.data[0].financingCosts,
        acquisitionCosts: props.data[0].acquisitionCosts,
        constructionCosts: props.data[0].constructionCosts,
        sellingCosts: props.data[0].sellingCosts, 
        finalSqft: props.data[0].finalSqft,
        salePerSqft: props.data[0].salePerSqft,
    },
]

const row2 = props.data.map(item=>{
    return { 
        id: `${props.data.length}`, 
        projectName: item.projectName, 
        purchasePrice: item.purchasePrice, 
        initialSQFT: item.initialSQFT ,
        financingCosts: item.financingCosts,
        acquisitionCosts: item.acquisitionCosts,
        constructionCosts: item.constructionCosts,
        sellingCosts: item.sellingCosts, 
        finalSqft: item.finalSqft,
        salePerSqft: item.salePerSqft,
    }
})

console.log(row2)

  return (
    <div style={{ height: 400, width: '100%' }}>
        
      <DataGrid
        rows={row2}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
