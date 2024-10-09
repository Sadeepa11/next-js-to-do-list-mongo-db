"use client";
import Todo from '@/components/Todo';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';


export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {

     const response= await axios.get('/api');

     setTodoData(response.data.todos);
    
  }

  const deleteTodo =async (id) => {

    const response = await axios.delete('/api',{

      params:{
        mongoId:id
      }
    });

    toast.error(response.data.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
        transition: Bounce,
       
      });

      fetchTodos();
  
    
  }

  const updateTodo = async (id) => {

    const response = await axios.put('/api',{},{
      params:{
        mongoId:id
      }
    });

    toast.info(response.data.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
        transition: Bounce,
       
      });

      fetchTodos();
  
    
  }

  useEffect(()=>{
fetchTodos();
  },[])



  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));

  };

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevents page reload
   try{

    // api code


    const response = await axios.post('api',formData)

    setFormData({
      title: "",
      description: "",
      
    });
    await fetchTodos();

    toast.success(response.data.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
        transition: Bounce,
       
      });
  
   }catch(error){

    toast.warning('Error', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

   }
  };

  return (
    <main>

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <form onSubmit={onSubmitHandler} className="flex items-center flex-col gap-2 w-[80%] max-w-[600px] mt-2 px-2 mx-auto">
        <input onChange={onChangeHandler} value={formData.title} type="text" name="title" placeholder="Enter title" className="px-3 border-2 w-full" />
        <textarea onChange={onChangeHandler} value={formData.description} name="description" placeholder="Enter Description" className="px-2 py-3 border-2 w-full"></textarea>

        <button type="submit" className="bg-black py-3 px-11 w-[100%] text-white">Add Todo</button>
      </form>

      <div className="relative overflow-x-auto w-[95%] mx-auto my-10">
        <table className="w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            
              {todoData.map((item,index)=>{

                return<Todo deleteTodo={deleteTodo} updateTodo={updateTodo} key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id}/>

              })}

          </tbody>
        </table>
      </div>
    </main>
  );
}
