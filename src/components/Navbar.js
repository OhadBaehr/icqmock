import './Navbar.scss'
import newMessage from '../assets/new-message.svg'
import avatar1 from '../assets/avatars/1.png'
import camera from '../assets/camera.svg'
import more from '../assets/more.svg'
function Navbar(){
    return (
        <>
           <nav className='nav'>
                <div className='side'>
                <span>Chats</span>
                <img src={newMessage} />
                </div>
                <div className='chat-banner content'>
                <img className='avatar' src={avatar1}/>
                <div className='circle'></div>
                <span className='name'>Jessica</span>
                <img className='camera' src={camera}/>
                <img className='more' src={more}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
export {Navbar}