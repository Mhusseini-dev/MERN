import React, {useState} from 'react'

const MessageFormComponent = (props) => {
    const [msg, setMsg] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.youveGotMail(msg);
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h1>create a box </h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value )}
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    )
}

export default MessageFormComponent
