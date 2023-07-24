import React, { useEffect, useState } from 'react'; 
import { fetchJsonData } from '../utils/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; 
import DepartmentListWithJSON from './DepartmentList';
import './SecondPage.css'


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
    // Fetching  data from  api  and updating the State
    fetchJsonData('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='secondPage' >

      <div className='Main'>

      <p className='userHeader'>User's Posts Data </p>
      {/* //displaying data of api using DataGrid  */}
      <DataGrid className='dataTable' rows={data} columns={columns}  />

      <div className='department '>

         {/* // rendering DepartmentList component which contain hierarchical tree  */}
         <DepartmentListWithJSON/> 
         
         </div>
      </div>
    </div>
  );
};

export default SecondPage;
