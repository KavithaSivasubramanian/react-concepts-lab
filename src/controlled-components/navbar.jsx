export function Navbar(props){
    return(
        <nav className={`d-flex ${props.theme} my-2 border-1 justify-content-between p-2`}>
            <div className="fw-bold fs-4 ms-0">{props.brand}</div>
            <div>
              {props.menu.map(item=><span className="mx-4" key={item}>{item}</span>)}
            </div>
            <div className="me-0">
            <button className="btn bi bi-person-fill"> Signin </button>
            <button className="btn bi bi-heart"></button>
            <button className="btn bi bi-facebook"></button>
            </div>
        </nav>
    )
}