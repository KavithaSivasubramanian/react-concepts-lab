import { useState,useEffect } from "react"
import moment from "moment"
export function DataBinding(){
const [uname,setUname] = useState('Kavitha');
useEffect(()=>{
    setUname('Akshitha');
},[])
const [price] = useState(4500000.30);
const[rate] = useState(0.567);
const [weight]=useState(75);
const [views] = useState(56009993);
const [stringToNumber] = useState('ABC');
const [stock] = useState(true);
const [errorClass] = useState('text-danger');
const [successClass] = useState('text-success');

const [today, setToday] = useState(new Date());
/* useEffect(()=>{
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1);
    setToday(tomorrow);
},[]); */

const [pattern] = useState(/\+91\d{10}/);
const [mobile] = useState('+919884230909');

    return(
        <div className="container p-4">
            <h2>Data Binding</h2>
            <p>Hello ! {uname}</p>
            <p>{setUname}</p>
            <p className="fs-4">{price.toFixed(2)}</p>
            <p className="fs-4">{price.toPrecision(8)}</p>
            <p className="fs-4">{price.toLocaleString()}</p>
            <p className="fs-4">{price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</p>
            <p className="fs-4">{price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}</p>

            <p className="fs-4">{rate.toLocaleString('en-us',{style:'percent'})}</p>
            <p className="fs-4">{weight.toLocaleString('en-us',{style:'unit',unit:'ounce'})}</p>
            <p className="fs-4 bi bi-eye">{views.toLocaleString('en-us',{notation:'compact'})} views</p>
            <p className="fs-4 bi bi-eye-fill">{views.toLocaleString('en-in',{notation:'compact'})} views</p>
            <p className="fs-4">{parseInt(stringToNumber)}</p>
            <p className="fs-4">{isNaN(stringToNumber)}</p>
            <p className="fs-4">Stock : {(stock === true)?"true":"false"}</p>
            <p className={"fs-4 border border-1 " + errorClass }>Error Message</p>
            <p className={`fs-4 border border-1 ${successClass}`}>Success Message</p>

            <p className="fs-6">{today.toLocaleDateString()}</p>
            <p className="fs-6">{moment(today).format('dddd DD, MMMM YYYY')}</p>

            <p className="fs-6">{(mobile.match(pattern)) ? 'verified':'Invalid Mobile No'}</p>
            
        </div>
    )
}