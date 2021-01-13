import React, { Component } from 'react'
import NameList from './components/NameLists'
import data from './components/data'

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: data
        }
    }

    handleClear = () => {
        this.setState({
            name: []
        })
    }
    render() {
        const dataComp = this.state.name.map(item => <NameList key={item.id} name={item.name} />)
      return (
        <div className="container">
            <div className='row'>
                <div className='col-6 offset-3'>
                    {dataComp}
                </div>
            </div>
            <button className="" onClick={this.handleClear}>clear item</button>
        </div>
      )
    }
}

export default App;
