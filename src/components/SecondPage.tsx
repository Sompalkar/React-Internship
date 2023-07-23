import React, { useEffect, useState } from 'react'; 
import { fetchJsonData } from '../utils/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; 
import DepartmentListWithJSON from './DepartmentList';


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'User ID', width: 120 },
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const SecondPage: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from API and update the state
    fetchJsonData('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Second Page</h1>
      <DataGrid rows={data} columns={columns}   />

      <div> <DepartmentListWithJSON/> </div>
    </div>
  );
};

export default SecondPage;
