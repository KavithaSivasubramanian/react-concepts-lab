export function DataGrid(props){
    return(
        <div className="table-responsive">
         <table className={`table table-hover ${props.theme} caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
            {
                Object.keys(props.data[0]).map(field=><th key={field}>{field}
                <span className="dropdown">
                  <button className="dropdown-toggle btn bi bi-three-dots-vertical" data-bs-toggle="dropdown
                  "></button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><span className="bi bi-funnel"></span>Filter</li>
                    <li className="dropdown-item"><span className="bi bi-sort-alpha-down"></span>Sort Ascending</li>
                    <li className="dropdown-item"><span className="bi bi-sort-alpha-up"></span>Sort Descending</li>
                  </ul>
                </span>
                
                </th>)
            }
            <th>Actions</th>
            </thead>
            <tbody>
                {
                    props.data.map((item,i)=><tr key={i}>
                    {
                        Object.keys(item).map((field,i)=><td key={i}>
                            {
                                item[field]
                            }
                        </td>)
                    }
                    <td>
                    <button className="btn btn-danger bi bi-trash"></button>
                    <button className="btn btn-warning bi bi-pen mx-2"></button>
                    </td>
                    </tr>)
                    
                }
                
                

                    
            </tbody>

         </table>
        </div>
    )
}