import React, { ReactNode } from "react";

type props = {
    todos: String[]
    settodos: React.Dispatch<React.SetStateAction<any[]>>
}
export default function Todo({ todos, settodos }: props) {
    console.log(todos);
    function filterelement(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let index: number = parseInt(e.currentTarget.value)

        todos.forEach((item, i) => {
            console.log(item);

            if (i === index) {

                let todo = todos.filter(function (value, index) {
                    return index !== i
                })
                settodos(todo)

            }

        })
    }

    let todo = todos.map((item, i) => {
        return (
            <div className="pt-4 px-1" key={i}>
                <div className='w-3/3 py-3 sm:px-3 text-black mb-5 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <button className='w-5 h-5  rounded-full bg-blue-900'></button>
                    <div className=' w-5/6 px-2 '>
                        {item}
                    </div>
                    <button onClick={(e) => filterelement(e)} name='btn' value={i} >delete</button>
                </div>
            </div>

        )
    })


    return (
        <>
            {
                todo
            }

        </>
    )
}

