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
        purchasePrice: props.data.purchasePrice, 
        initialSQFT: props.data.initialSQFT ,
        financingCosts: props.data.financingCosts,
        acquisitionCosts: props.data.acquisitionCosts,
        constructionCosts: props.data.constructionCosts,
        sellingCosts: props.data.sellingCosts, 
        finalSqft: props.data.finalSqft,
        salePerSqft: props.data.salePerSqft,
    },
    { 
        id: 2, 
        projectName: "0", 
        purchasePrice: props.data.purchasePrice, 
        initialSQFT: props.data.initialSQFT ,
        financingCosts: props.data.financingCosts,
        acquisitionCosts: props.data.acquisitionCosts,
        constructionCosts: props.data.constructionCosts,
        sellingCosts: props.data.sellingCosts, 
        finalSqft: props.data.finalSqft,
        salePerSqft: props.data.salePerSqft,
    },
    { 
        id: 3, 
        projectName: "0", 
        purchasePrice: props.data.purchasePrice, 
        initialSQFT: props.data.initialSQFT ,
        financingCosts: props.data.financingCosts,
        acquisitionCosts: props.data.acquisitionCosts,
        constructionCosts: props.data.constructionCosts,
        sellingCosts: props.data.sellingCosts, 
        finalSqft: props.data.finalSqft,
        salePerSqft: props.data.salePerSqft,
    },
]


  return (
    <div style={{ height: 400, width: '100%' }}>
        
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
