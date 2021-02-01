import React, {useState} from 'react';

const Tab = ({header,content}) => {

    const tabs = [
        {header:"Tab 1", content:"Tab 1 content is showing here."},
        {header:"Tab 2",content:"Tab 2 content is showing here." },
        {header:"Tab 3",content:"Tab 3 content is showing here." }
    ]
    const [state, setState] = useState({
        content:"",   
        color:"",
        id:""
    });  

    const onClickHandler = (e,index) => {
        setState({
            content:tabs[index].content,
            color:"black",
            id:index
        })
    }

    return (
        <div>
      {tabs.map((tab,i) => 
      <button onClick={(e)=> onClickHandler(e,i)} key={i} {...tab}
      style={{color:"red",backgroundColor:state.id==i&&state.color}}>{tab.header}</button>
      )}
        <p>{state.content}</p>
        </div>        

    )}
export default Tab;