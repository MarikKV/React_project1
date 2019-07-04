import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <table>
                    < Table/>
                </table>
            </div>
        );
    }
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

class Table extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoader : true,
                    items: json,
                })
            })
    }
    render() {
        var {isLoaded, items} = this.state;

        return (
            <div>
                <tr>
                    {items.map(item => (
                        <td key={item.id}>
                            {item.name}
                        </td>
                    ))}
                </tr>
            </div>
        );
    }
}
export default App;
