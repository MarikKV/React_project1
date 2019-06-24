import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        < Table />
    </div>
  );
}

function Header() {
    return(
        <div className="sticky">
           <div className="logo">Tasktable</div>
            <form>
                <div className="for-input">
                    <input id="name" type="text" name="name" placeholder='Name' />
                </div>

                <div className="for-input">
                    <input id="date" type="date" name="date" placeholder='Date' />
                </div>

                <div className="for-input">
                    <input id="task" type="text" name="task" placeholder='Task' />
                </div>

                <div className="for-save-btn">
                    <div id="save" className="save-btn">Save</div>
                </div>
            </form>
        </div>
    );
}

function Table() {
    return(
            <div>

            </div>
        );
}
export default App;
