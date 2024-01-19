import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
interface DataTableProps {
    rows: Array<any>;
    columns: Array<any>;
    loading:boolean;
    sx:object;
  }

  const DataTable: React.FC<DataTableProps> = ({ rows, columns ,loading,sx}) => {
    

    return (
        <div style={{overflowX: 'auto'}}>
        <DataGrid 
            rows={rows}
            columns={columns}
           
            
            loading={loading}
            sx={sx}
            checkboxSelection
            pagination
        />
        </div>
    );
};

export default DataTable