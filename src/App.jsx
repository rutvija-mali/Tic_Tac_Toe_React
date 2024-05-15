import './App.css'
import logo from './assets/tic_tac_toe-1024.webp'
import Play from './components/play/Play'
import Game_Board from './components/game_bord/Game_Board';
import { useState } from 'react';

function App()
{
    let[player1 , setPlayer1] = useState("Player1");
    let[player2 , setPlayer2] = useState("Player2");
    return(
        <div className="mainContainer">
            <h1 className='game-Heading'>Tic Tac Toe Game</h1>
            <div className="img-container">
                <img src={logo} width="70px" height="70x"/>
            </div>

            <div className="mainSection">
                <div className="gameContainer">
                   <div className="playerSection">
                        <Play playerName={"Player1"} symbol={'X'} setPlayer={setPlayer1}/>
                        <Play playerName={"Player2"} symbol={'O'} setPlayer={setPlayer2} />
                   </div>
                   <div className="gameSection">
                    <Game_Board player1 ={player1} player2={player2}/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default App;