import Avatar2 from '../assets/avatars/2.png'
import Avatar3 from '../assets/avatars/3.png'
import Avatar4 from '../assets/avatars/4.png'
import Avatar5 from '../assets/avatars/5.png'
import Avatar6 from '../assets/avatars/6.png'
import Search from '../assets/search.svg'
import './SideNav.scss'
import {useRef,useState} from 'react'

const initialUsers=[
    {
        name:"Bob",
        img:Avatar2,
        lastMessage:"Hi Dude!",
        key:1,
    },
    {
        name:"Amber",
        img:Avatar3,
        lastMessage:"Bali Hazil?",
        key:2,
    },
    {
        name:"John",
        img:Avatar4,
        lastMessage:"It's due tommorow",
        key:3,
    },
    {
        name:"Patrick",
        img:Avatar5,
        lastMessage:"Leave me alone",
        key:4,
    },
    {
        name:"Mom",
        img:Avatar6,
        lastMessage:"Come down, dinner's ready",
        key:5,
    },
]
function SideNav(){
    const input= useRef(null)
    const [users,setUsers]=useState(initialUsers)
    return (
        <>
        <div className='side-nav'>
            <div className='search-container'>
                <img src={Search}/>
                <input ref={input} placeholder={"search"} onChange={(e)=>{
                    setUsers(initialUsers.filter(x=>x.name.toLowerCase().includes(input.current.value.toLowerCase())))
                }}></input>
            </div>
            {users.map((user)=>{
                const {name,img,lastMessage,key} = user
                return <div className='user' key={key}>
                        <img src={img}/>
                        <div className='text-content'>
                            <h3>
                                {name}
                            </h3>
                            <span>{lastMessage}</span>
                        </div>
                    </div>
            })}
        </div>

       
        </>
    )
}

export default SideNav
export {SideNav}