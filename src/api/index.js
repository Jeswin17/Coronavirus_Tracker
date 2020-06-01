import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//functional component using modern way of async called await 

export const fetchData = async () => {
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    }catch (error) {
        return error;
    }
} ;
//fetchData is an asynchr.. function returning data from api


export const fetchDailyDate = async () =>{

    try{
        const response = await axios.get(`${url}/daily`);
    }
    catch(error){
        
    }
}