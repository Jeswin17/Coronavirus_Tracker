import React from 'react';

// import Cards from ' ./components/Cards/Cards';
// import Chart from ' ./components/Chart/Chart';
// import CountryPicker from ' ./components/CountryPicker/CountryPicker';

import{ Cards , CountryPicker, Chart } from './components';
 import { fetchData } from './api/';
 import styles from './App.module.css'; 

 import coronaImage from './images/image.jpg';

class App extends React.Component{

    state = {
        data: {},
        country: '',

    }

    async componentDidMount() {


        const fetchedData = await fetchData();
        
        this.setState({ data : fetchedData});

       // console.log(data);
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country: country });

        //
    }


    render(){
        const { data, country }  = this.state;

        return(
             
            
            <div className={styles.container}>
                < img className={styles.image} src={coronaImage}  alt="corona"/> 
                <Cards data = {data } />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data = {data } country={country} />
            </div>
        );
    }
}


export default App;