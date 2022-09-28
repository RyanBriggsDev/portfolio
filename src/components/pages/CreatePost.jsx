import { async } from "@firebase/util";
import { useState } from "react";
import { db, auth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";

function CreatePost() {

    const [ user, loading, error ] = useAuthState(auth);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        datePosted: ''
    })

    let {title, content, datePosted} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
        console.log(formData);
    }

      const submitPost = async () => {
        const docRef = await addDoc(collection(db, 'blogPosts'), formData)
        alert('Successfully Posted')
        setFormData({
            title: '',
            content: '',
            datePosted: ''
        })
    }

    if(auth.currentUser) {
        return (
            <div className="create-blog">
        <h1>Create a blog post</h1>
        <input 
            onChange={onChange} 
            type="text" 
            placeholder='Enter a title...'
            id='title'
            value={title}
            />
        <textarea 
            onChange={onChange} 
            type="text" 
            placeholder='Enter blog content...'
            id='content'
            value={content}
            />
        <input
            onChange={onChange} 
            type="text" 
            placeholder='17th September 2022'
            id='datePosted'
            value={datePosted}
            />
        <button className="btn" onClick={() => submitPost()}>Publish</button>
    </div>
  )
}

    return <button className="btn" onClick={() => navigate('/login')}>Login</button>

}

export default CreatePost