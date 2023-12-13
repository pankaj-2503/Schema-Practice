import mongoose from 'mongoose';

const subtodo=new mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }

  },{timestamps:true});

export const suTodo=mongoose.model("SubTodo",subtodo)
