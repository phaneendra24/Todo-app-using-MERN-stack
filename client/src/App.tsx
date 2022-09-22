import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react'
import Todos from './components/Todos'
import Header from './components/Header'

const api = "http://localhost:5000/"


function App() {
  const [todos, settodos] = useState<{ todo: string; id: any }[]>([{
    todo: "",
    id: 0
  }])
  const [popupActive, setPopupActive] = useState(false)

  useEffect(() => { getApiData() }, [])


  const getApiData = async () => {
    const response = await fetch(api)
    const data = await response.json()
    settodos([])
    await data.map((item: any) => {
      const response = { todo: JSON.stringify(item.todo), id: item._id }
      settodos(todos => [...todos, response])

      return null
    })

  }

  const setApiData = async (value: any) => {
    const data = await fetch(api, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: value })
    })
    await getApiData()
  }


  let inputSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let value = e.currentTarget.input.value
    await setApiData(value)
      .then(
        e.currentTarget.input.value = null
      )
  }
  const arraylength = 0

  return (
    <div className="App  bg-gray-900 h-screen w-full flex justify-center items-center ">
      <div className="container sm:w-5/12 sm:h-5/6 h-full w-full px-4 sm:px-10 bg-white rounded-lg overflow-auto">
        <div className='flex justify-between items-center  pt-5 '>
          <Header todos={todos} />
        </div>
        <div className=' flex justify-end sm:pr-5'>
          <button onClick={() => {
            setPopupActive(true);
          }
          } className='flex justify-center items-center  bg-blue-900 border-2 text-white text-xl font-bold  rounded-full shadow h-16 w-16 '>
            +
          </button>
        </div>
        <div className="flex flex-col justify-center">


          {
            popupActive ? (
              <div className='  flex justify-center items-center ease-in-out'>
                <div className='w-5/6 bg-white p-5 rounded-lg text-white'>

                  <div className="flex justify-between px-2 pb-1 text-gray-900">
                    <h1 className=''>Add a task</h1>
                    <button onClick={() => setPopupActive(false)} className="flex justify-center items-center  bg-red-600 border-2 text-white rounded-full shadow h-6 w-6 " >x</button>
                  </div>
                  <form onSubmit={e => inputSubmit(e)} >
                    <input required name='input' className='text-black w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none p-2' />
                    <button className='exit-btn mt-3 sm:h-14 sm:w-32 w-20 h-12 flex justify-center items-center'  >
                      CREATE TASK
                    </button>
                  </form>
                </div>
              </div>
            )
              : null}


          <Todos todos={todos} settodos={settodos} getdata={getApiData} />




        </div>
      </div>
    </div >
  );
}

export default App;
