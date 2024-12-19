import React from 'react'

function Navbar(props) {
  return (
    <>
        {props.show ? (
            <div id="navbar" className='h-screen bg-[#00021a] fixed z-40 top-0 w-[300px]'>
            </div>
        ) : (<div></div>)}
    </>
  )
}

export default Navbar
