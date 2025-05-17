import { useState } from 'react'


function App() {
 const [color,setColor]= useState("olive")

  return (
    <>
     <div className=' w-full h-screen duration-200 ' style={{background:color}}> 
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 bg-white p-2 rounded-lg shadow-lg'>
              <button onClick={()=>setColor("red")}    className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"red"}}> red </button>
               <button onClick={()=>setColor("green")}  className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"green "}}>green </button>
               <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"yellow"}}>yellow </button>
               <button onClick={()=>setColor("pink")}   className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"pink"}}>pink</button>
                <button onClick={()=>setColor("orange")}  className='outline-none px-4 py-1 rounded-full shadow-lg  ' style={{backgroundColor:"orange"}}>orange</button>
               <button onClick={()=>setColor("white")}  className='outline-none px-4 py-1 rounded-full shadow-lg   ' style={{backgroundColor:"white"}}>white </button>
                 <button onClick={()=>setColor("black")}  className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' style={{backgroundColor:"black"}}>black</button>
                   <button onClick={()=>setColor("blue")}   className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"blue"}}>blue </button>
</div>
      </div>
     </div>
    </>
  )
}

export default App
