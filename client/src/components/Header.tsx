import React from "react";

type props = {
  todos: {
    todo: string;
    id: any;
  }[]
}



export default function Header({ todos }: props) {
  const days = ["sunday", "monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date()
  const today = days[date.getDay()]
  const curret_date = date.getDate()
  const month = months[date.getMonth()]
  const arraylength = todos.length
  return (
    <>
      <div className="w-full  flex items-center justify-between h-auto  ">
        <div>
          <h1 className='lm:text-4xl sm:text-3xl text-2xl pr-2'>{today},{curret_date}th</h1>
          <p>{month}</p>
        </div>
        <div>
          {arraylength} tasks
        </div>
      </div>
    </>
  )
}

