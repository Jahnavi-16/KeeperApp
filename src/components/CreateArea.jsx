import React,{useState} from "react";

function CreateArea(props) {
  const [title,setTitle]=useState('');
  const [content,setContent] = useState('');
  function handleText(event) {
    const {value} = event.target;
    setContent(value);
  }
  function handleInput(event) {
    const {value} = event.target;
    setTitle(value)
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleInput} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleText} value={content}/>
        <button onClick={()=>{
                props.onClicked(event,title,content);
                setTitle('');
                setContent('');
            }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
