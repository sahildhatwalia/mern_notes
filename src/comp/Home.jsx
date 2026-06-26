import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Searchcontext'


const product=[
    {id:1,name:"abc",title:"helo"},
    {id:2,name:"qwe",title:"qwertyui"},
    {id:3,name:"as",title:"asdfg defghjkl"},
    {id:4,name:"fds",title:"zxcvb derty rtyui"},
    {id:5,name:"cx",title:"poiuytkjh lkjhg kjhg"},
]
const Home = () => {
    // const [search,setSearch]=useState("")
const {search}=useContext(SearchContext)
    const filterdata=product.filter((item)=>`${item.name}${item.title}`.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <p>qwertyuio</p>
    {/* <input className='border mb-6' type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='serach.....'/> */}
    <div className='grid grid-cols-2'>
     {
        filterdata.map((item)=>(
            <div className='border' key={item.id}>
                <p>{item.name}</p>
                <span>{item.title}</span>
            </div>
        ))
     }

    </div>
   
    </>
  )
}

export default Home
