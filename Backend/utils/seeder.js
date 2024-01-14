const connectDatabase = require('../config/database');
const users=require('../data/users.json');
const workshops=require('../data/workshop_data.json');

const user=require('../models/user');
const workshop=require('../models/workshop')
const dotenv=require('dotenv');

dotenv.config({path:'backend/config/config.env'});
connectDatabase();
const seedUsers=async()=>
{
    try{
        await user.deleteMany();
        console.log('All users deleted!');
    
        await user.insertMany(users);
        console.log('All users added!');
    }
    catch(error)
    {
        console.log(error.message);
    }
    process.exit();
}

const seedWorkshop=async()=>
{
    try{
        await workshop.deleteMany();
        console.log('All users deleted!');
    
        await workshop.insertMany(workshops);
        console.log('All users added!');
    }
    catch(error)
    {
        console.log(error.message);
    }
    process.exit();
}

// seedUsers();
seedWorkshop();