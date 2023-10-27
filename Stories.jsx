import { useContext } from 'react'
import './Stories.scss';
import {AuthContext} from '../../Context/AuthContext'

function Stories() {
    const {currentUser} = useContext(AuthContext)
    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Heba Assy",
            img: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Eman Ameen",
            img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Omnia Osama ",
            img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]


    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className='story'  key={story.id}>
                    <img src={story.img} />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories