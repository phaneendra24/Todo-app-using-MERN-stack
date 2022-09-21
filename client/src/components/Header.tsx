import React from "react";

export default function Header() {
  const days = ["sunday", "monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date()
  const today = days[date.getDay()]
  const curret_date = date.getDate()
  const month = months[date.getMonth()]
  return (
    <>
      <div>
        <h1 className='text-4xl'>{today},{curret_date}th</h1>
        <p>{month}</p>
      </div>
    </>
  )
}

