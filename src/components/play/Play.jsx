import { useState } from 'react';
import './Play.css'

function Play(props)
{
     let[playerName , setPlayerName] = useState(props.playerName)

     let[isEditing , setIsEditing] = useState(false)
      function handleChange(event)
      {
          setPlayerName(event.target.value);
      }

     function handleClick(){
        // isEditing = setIsEditing(!isEditing);
        if(isEditing)
        {
            props.setPlayer(playerName);
            setIsEditing(false);
        }else
        {
            setIsEditing(true);
        }
     }

    function handleKey(event)
    {
        if(event.key=="Enter")
            {
                props.setPlayer(playerName);
                setIsEditing(false);
            }
    }

     let editablePlayerName = <span className='PlyarerName'>{playerName}</span>

     if(isEditing)
     {
        editablePlayerName = <input type='text' 
                               required 
                               onChange={handleChange} 
                               onKeyDown={handleKey}
                               />
     }
    return(
        <div className='play-Container'>
            {editablePlayerName}

            <span className='symbol'>{props.symbol}</span>

            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </div>
    )

}
export default Play;