
import axios from "axios";
import { useState, useEffect } from "react";
import DataTable from "./DataTable";
interface FormValues12 {
    id: string;
    userId:string;
    body: string;
    title:string;
    
    
    
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'body', headerName: 'Body', width: 300 },
    { field: 'title', headerName: 'Title', width: 300 },
   
];
const userTableStyles = {
  height: '650px',
};
const Data = () => {
    const [data,setData]=useState<FormValues12[]>([])
    const xyz = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            // Handle successful response
            //  console.log(response)
            setData(response.data);
            console.log(response)
          })
          .catch((error) => {
            // Handle error
            console.error("Error fetching data:", error);
          });
      };
      useEffect(() => {
        xyz();
        {console.log(data)}
      }, []);
  return (
    <div>
     hello
     <DataTable
            rows={data}
            columns={columns}
            loading={!data.length}
            sx={userTableStyles}
          
        />
    </div>
  )
}

export default Data
