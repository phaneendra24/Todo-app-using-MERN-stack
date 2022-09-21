import React, { useState } from 'react';
import type { FormEvent } from 'react'
import Todos from './components/Todos'
import Header from './components/Header'
function App() {
  const [todos, settodos] = useState<String[]>([])



  const [popupActive, setPopupActive] = useState(false)

  let inputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("worked");
    let value = e.currentTarget.input.value

    settodos(oldarray => [...oldarray, value])
    e.currentTarget.input.value = ""
  }

  return (
    <div className="App  bg-gray-900 h-screen w-full flex justify-center items-center ">
      <div className="container sm:w-5/12 sm:h-5/6 h-full w-full px-4 sm:px-10 bg-white rounded-lg overflow-auto">
        <div className='flex justify-between items-center  pt-5 '>
          <Header />
          3 tasks
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
                    <button className='exit-btn mt-3'  >
                      CREATE TASK
                    </button>
                  </form>
                </div>
              </div>
            )
              : null}


          <Todos todos={todos} settodos={settodos} />




        </div>
      </div>
    </div >
  );
}

export default App;
