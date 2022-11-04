import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../Action/index";

const Events=()=>{
  const [modal ,setModal] =useState(false);
  const [inputData, setInputData]= useState("");
  const [option, setoption]= useState("");
  const [Date, setDate]=useState("")
  const [eventDes,seteventDes]=useState("")
  const [eventorga,seteventOrga]=useState("")
  const [subEvent,setsubEvent]=useState("")
  const dispatch=useDispatch();

    const toggleModal=()=>{
      setModal(!modal);
  }
    return(
        <div>
        <button onClick={toggleModal}>AddTask</button>

      {modal && (<div onClick={toggleModal}>
        <div>
          <input type="text" placeholder=" Enent Name" value={inputData}
          onChange={(event)=>setInputData(event.target.value)}
          />
          <select value={option}
          onChange={(event)=>setoption(event.target.value)}>
            <option>dropdown</option>
            <option>sports</option>
            <option>music</option>
            <option>general</option>
            <option>childern</option>
            <option>school</option>
          </select>
          <input type="Date" value={Date}
          onChange={(event)=>setDate(event.target.value)}
          />
          <input type="text" placeholder=" Event Description" value={eventDes}
          onChange={(event)=>seteventDes(event.target.value)}
          />
          <input type="text" placeholder=" Enent Organisation" value={eventorga}
          onChange={(event)=>seteventOrga(event.target.value)}
          />
          <input type="text" placeholder="Total no of sub events" value={subEvent}
          onChange={(event)=>setsubEvent(event.target.value)}
          />
          <button onClick={()=>dispatch(addEvent(inputData),setInputData(''),setoption(''),
          setDate(),seteventDes(''),seteventOrga(''),setsubEvent(''))}>Submit</button>
        </div>
      </div>)}
    </div>
    )
}
export default Events