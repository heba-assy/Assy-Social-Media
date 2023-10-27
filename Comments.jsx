import { useContext } from 'react';
import { AuthContext } from "../../Context/AuthContext"
import './Comments.scss';

function Comments() {
    const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Harry",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 2,
            name: "Kasem",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        }
    ]
    return (
        <div className='comments'>
            <div className='write'>
                <img src={currentUser.profilePic} />
                <input type='text' placeholder='Write A Comment' />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className='comment'>
                    <img src={comment.profilePic} />
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments