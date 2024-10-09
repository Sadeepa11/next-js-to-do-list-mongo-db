import mongoose from "mongoose"

export const ConnectDB =async()=>{
    await mongoose.connect('mongodb+srv://sadeepasrirohanasinghe37:CZk8ZJeCZWjhKQYJ@cluster1.iz2wk.mongodb.net/nexttodoapp');
    console.log("DB Coneected");
    
}