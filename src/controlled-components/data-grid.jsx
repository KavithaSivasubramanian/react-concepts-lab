export function DataGrid(props){
    return(
        <div className="table-responsive">
         <table className={`table table-hover ${props.theme} caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
            {
                Object.keys(props.data[0]).map(field=><th key={field}>{field}</th>)
            }
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
                    </tr>)
                }

            </tbody>

         </table>
        </div>
    )
}