import { connect } from 'mongoose'
import { MONGODB_URI } from './config';


export const connectdb = async () => {
    try {
        await connect(MONGODB_URI)
        console.log('connect to db');

    } catch (error) {
       console.log(error); 
    }    
}