import React, { Component } from 'react';
import './TicTacToe.css';

const TicTacToe = () => 
{
    //Board Structure
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    //Action Event
    const handleClick = (index) =>
    {
        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);

        //Determine Winner
        if(calculateWinner(newBoard))
        {
            setWinner(calculateWinner(newBoard));
        } else {
            setXIsNext(!xIsNext);
        }
    };
    
    const calculateWinner = (squares) => 
    {
        const lines = 
        [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ];

        for (var i = 0; i < lines.length; i++)
        {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[c])
            {
                return squares[a];
            }
        }
        return null;
    };

    //Score Information
    const renderSquare = (index) =>
    {
        return (
            <button className = "square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const resetGame = () => 
    {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    const getStatus = () =>
    {
        if (winner) 
        {
            return `Winner: ${winner}`;
        } else if (board.every((square) => square !== null))
        {
            return 'Draw';
        } else
        {
            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
            
    };

    return (
        <div className="game">
            
            <div className = "game-board">
                <div classname = "board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>

                <div classname = "board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>

                <div classname = "board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>

            <div className="game-nfo">
                <div>{getStatus()}</div>
                <button onClick={resetGame}>Reset Game</button>
            </div>

        </div>
    )

    

}


/*
const Greeting = ({ isLoggedIn }) =>
{
    return (
        <div>
        {isLoggedIn ? <h1>Welcome back</h1> : <h1>Please Sign Up.</h1>}
        </div>
    );
};

export default Greeting;
*/

/*
const Button = () =>
{
    const handleClick = () =>
    {
        alert('Button was pressed');
    };

    return <button onClick={handleClick}>Submit</button>;
};
*/

//export default Button;

/*
class Counter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { count: 0}; //Starts Counter at 0
    }

    render()
    {
        return (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1})}>Increment</button>
        </div>
        );
    }
}


export default Counter;
*/

/*
const Welcome = (props) => 
{
    return <h1>Hello Class, {props.storage}!</h1>;
};

/*
const Greeting = () =>
{
    return <h1>Hello Class</h1>;
};
*/

//export default Welcome;

