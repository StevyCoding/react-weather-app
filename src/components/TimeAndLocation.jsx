import React from 'react'

function TimeAndLocation(props) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          {props.localtime}
          {/* Tuesday, 31 May 2022 | Local time : 12:46 PM */}
        </div>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
        {props.name}, {props.country}

          {/* Berlin, BE */}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation