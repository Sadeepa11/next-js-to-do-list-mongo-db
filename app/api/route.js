import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoasDB= async () => {
    

   await ConnectDB();
}

LoasDB();

export async function GET(request) {


    const todos =await TodoModel.find({});
    return NextResponse.json({todos:todos});
    
}

export async function POST(request) {

    const {title,description}=await request.json();

    await TodoModel.create({
        title,
        description
    })

    return NextResponse.json({msg:"Todo Created"});
    
}

export async function DELETE(request) {


    const momgoId = await request.nextUrl.searchParams.get('mongoId');

    await TodoModel.findByIdAndDelete(momgoId);




    return NextResponse.json({msg:"Todo Deleted"});
    
}


export async function PUT(request) {


    const momgoId = await request.nextUrl.searchParams.get('mongoId');

    await TodoModel.findByIdAndUpdate(momgoId,{
        $set:{
            isCompleted:true
        }
    });




    return NextResponse.json({msg:"Todo Completed"});
    
}

