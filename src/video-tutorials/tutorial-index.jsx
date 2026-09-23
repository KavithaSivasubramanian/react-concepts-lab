import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { JavaScriptTutorial } from "./javascript-tutorial";
import { PythonTutorial } from "./python-tutorial";
import { ReactTutorial } from "./react-tutorial";

export function TutorialDemo(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-primary text-white p-3 mt-3 border border-2 border-dark rounded-3 text-center">
                
                    <span className="fw-bold fs-3 bi bi-camera-video">
                       Video Tutorials 
                    </span>
                    <div className="mt-3 fs-5 fw-bold">
                        <Link to="/" className="text-center text-black text-decoration-none mx-4" >Home</Link>
                        <Link to="/javascript" className="text-center text-black text-decoration-none mx-4" >JavaScript</Link>
                        <Link to="/java" className="text-center text-black text-decoration-none mx-4" >Java</Link>
                        <Link to="/python" className="text-center text-black text-decoration-none mx-4" >Python</Link>
                        <Link to="/react" className="text-center text-black text-decoration-none mx-4" >React</Link>

                    </div>

            </header>
            
            <section className="border border-2 border-dark rounded-3 mt-1 p-3">
                <Routes>
                    <Route path="/" element={<div className="p-3">Welcome to the Video Tutorials!</div>} />
                    <Route path="java" element={<JavaTutorial />} />
                    <Route path="javascript" element={<JavaScriptTutorial />} />
                    <Route path="python" element={<PythonTutorial />} />
                    <Route path="react" element={<ReactTutorial />} />
                    <Route path="*" element={<div className="p-3">404 Not Found</div>} />

                </Routes>
                
            </section> 
            </BrowserRouter>   
        </div>
    )
}
