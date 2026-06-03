import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";
export function ControlledDemo(){
    const[employee] = useState(
    [
        {Firstname:"Kavitha",Lastname:"Subbu",id:1},
        {Firstname:"Mohanraj",Lastname:"Selvam",id:2},
        {Firstname:"Akshaydev",Lastname:"Mohanraj",id:3},
        {Firstname:"Akshitha",Lastname:"Mohanraj",id:4}
    ]);
    const[products] = useState(
    [
        {Name:"Mobile",id:1},
        {Name:"Appliance",id:2},
        {Name:"TV",id:3},
        
    ]);
    return(
        <div className="container-fluid">
         <DataGrid theme="table-warning" caption="Employee Details" data={employee}/>
         <DataGrid theme="table-success" caption="Products Details" data={products}/>

        </div>
    )
    
}