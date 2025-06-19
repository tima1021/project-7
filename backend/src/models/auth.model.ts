import mongoose from "mongoose";

const { Schema, model } = mongoose;


cons auth = new Schema({
    email:String,
    password:String,
    phoneNumber:Number
    
})