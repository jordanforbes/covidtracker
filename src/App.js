import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({ data: data })
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        console.log(country);
        //fetch the data
        //set the date
    }

    render(){
        const { data } = this.state
        return(
            <div className={styles.container}>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        )
    }
}

export default App;