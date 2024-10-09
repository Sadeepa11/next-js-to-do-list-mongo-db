import React from 'react';


function Todo({ id, title, description, complete, mongoId,deleteTodo,updateTodo }) {

    return (

        <tr className="bg-white border-b hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {id + 1}
            </th>
            <td className={`px-6 py-4 ${complete?"line-through":""}`}>{title}</td>
            <td className={`px-6 py-4 ${complete?"line-through":""}`}>{description}</td>
            <td className="px-6 py-4">
                {complete ? "Completed" : "Pending"}

            </td>
            <td className="px-6 py-4 flex gap-1">

                <button className="py-2 px-4 bg-red-500 text-white" onClick={()=>deleteTodo(mongoId)} >Delete</button>

                {complete?"":<button className="py-2 px-4 bg-green-500 text-white" onClick={()=>updateTodo(mongoId)}>Done</button>}
                
            </td>
        </tr>
    )

}

export default Todo;