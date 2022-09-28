import { async } from "@firebase/util";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function CreatePost() {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: ''
    })

    let {title, content, date} = formData

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
            date: ''
        })
    }

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
            id='date'
            value={date}
        />
        <button className="btn" onClick={() => submitPost()}>Publish</button>
    </div>
  )
}

export default CreatePost