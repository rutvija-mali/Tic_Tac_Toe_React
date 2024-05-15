import { useEffect, useState } from 'react';
import './Game_Board.css'

function Game_Board(props)
{
   
     let [gameBoard , setGameBoard] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null] 
     ])

   

      let[turn,setTurn] = useState("X");
      let[winner , setWinner] = useState(false);
      let[winnerSymbol , setWinnerSymbol] = useState("")
      let[conclusion ,setConclusion] = useState(null);
      let gameResult = null;
      let gameWinner;
      
      function handleClick(event , row_idx ,col_idx){

          if(gameBoard[row_idx][col_idx] == null && winner == false)
          {
            let  newGameBoard = [...gameBoard];
                    newGameBoard[row_idx][col_idx] = turn;
                    setGameBoard(newGameBoard);
                    turn == "X" ? setTurn("O") : setTurn("X");

               
          }
          checkWinner();
      }

      function checkWinner(){
        
         
        for(let i = 0 ; i < gameBoard.length ; i++)
        {
            if(gameBoard[i][0]== gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2] && gameBoard[i][2] != null)
            {
                setWinner(true);
                setWinnerSymbol(gameBoard[i][0]);
               
            }
        }
         
        for(let j = 0; j < 3 ; j++)
        {
            if(gameBoard[0][j]== gameBoard[1][j] && gameBoard[1][j] == gameBoard[2][j] && gameBoard[2][j] != null){
                
                setWinner(true);
                setWinnerSymbol(gameBoard[0][j]);
            }
        }


        // to check diagonal
         if(gameBoard[0][0]== gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[2][2] != null)
        {
            setWinner(true);
            setWinnerSymbol(gameBoard[0][0]);
            
        }
        else if(gameBoard[0][2]== gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0] && gameBoard[2][0] != null)
        {
            setWinner(true);
            setWinnerSymbol(gameBoard[0][2]);
            
        }

        //checking for draw

        let bulb = false
        gameBoard.map((row)=>{
            row.map((element)=>{
                if(element == null)
                {
                    bulb = true;
                }
            })
        })

        if(bulb == false && winner == false )
        {
            setConclusion("draw");
        }
        
      }
      
    
      if(winner)
      {
        if(winnerSymbol == "X")
        {
            gameWinner = props.player1
            
          
        }else{
           gameWinner = props.player2
       
        }
        gameResult = <span id='winner-span'>Winner  is {gameWinner}</span>
        
      }else{
        if(conclusion == "draw")
        {
            gameResult =  <span id="winner-span"> There is a Draw </span>
        }
      }

       useEffect(()=>{
        console.log(gameBoard);
       },[gameBoard])

      function handleReset(){

        setGameBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ])
        if(winner == true)
        {
                setWinner(false)
        }else{
            setConclusion("")
        }
      
        
        
      }
    return(
       <div className='gameBoard-container'>
            {gameResult}
            <div className="game_board">
                    { gameBoard.map((row , row_idx)=>{
                        return (
                            <div className='row' key={row_idx} >
                            {
                                row.map((element,col_idx)=>{
                                    return <button className='btn' onClick={(event)=>{ handleClick(event ,row_idx,col_idx )}}  key={col_idx} >{element}</button>
                                })
                            }
                            </div>
                        );
                    })
                    }
            </div>
            <button className="reset" onClick={handleReset}>Reset</button>
       </div>
    )
}
export default Game_Board;