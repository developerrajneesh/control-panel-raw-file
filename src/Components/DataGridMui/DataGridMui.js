import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

const sampleData = [
  { id: 1, name: 'John Doe', rating: 4.5, country: 'USA', dateCreated: '2022-01-01', isAdmin: true },
  { id: 2, name: 'Jane Doe', rating: 3.8, country: 'Canada', dateCreated: '2022-02-15', isAdmin: false },
  { id: 2, name: 'Jane Doe', rating: 3.8, country: 'Canada', dateCreated: '2022-02-15', isAdmin: false },
  // Add more sample data as needed
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'rating', headerName: 'Rating', width: 120 },
  { field: 'country', headerName: 'Country', width: 120 },
  { field: 'dateCreated', headerName: 'Date Created', width: 150 },
  { field: 'isAdmin', headerName: 'Is Admin', width: 120 },
];

export default function DataGridMui() {
  const [data] = React.useState({
    rows: sampleData,
    columns: columns,
    initialState: {
      filter: {
        filterModel: {
          items: [],
          quickFilterValues: [''],
        },
      },
      pagination: { paginationModel: { pageSize: 5 } },
    },
    
  });

  const filteredColumns = React.useMemo(
    () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={data.rows}
        columns={filteredColumns}
        initialState={data.initialState}
        // disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
        pageSizeOptions={[5, 10, 25]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
