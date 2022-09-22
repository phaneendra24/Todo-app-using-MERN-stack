import React, { ReactNode, useState } from "react";

type props = {
    todos: {
        todo: string;
        id: any;
    }[]
    settodos: React.Dispatch<React.SetStateAction<{
        todo: string;
        id: any;
    }[]>>
    getdata: () => Promise<void>
}
const api = "http://localhost:5000/"

export default function Todo({ todos, settodos, getdata }: props) {
    let DeleteElement = async (id: any) => {

        const response = await fetch(api + id, {
            method: "DElETE",
        })
        const data = response.json()
        getdata()

    }

    let todo = todos.map((item: any, i: any) => {

        return (
            <div className="pt-4 px-1" key={i}>
                <div className='w-full py-3 sm:px-3 px-2 h-auto text-black mb-5 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <button className={`w-5 h-5  rounded-full border border-black bg-blue-900`}>
                    </button>
                    <div className=' sm:w-full w-2/3 px-2 h-auto '>
                        {item.todo.replace(/['"]+/g, '')}
                    </div>
                    <button name='btn' onClick={() => DeleteElement(item.id)} value={i} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    </button>
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


