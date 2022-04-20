import { useState, useEffect } from "react";

const words =[
    "blue","red","orange","pink","white","black","purple",
    "brown","grey","yellow","green","cyan","violet"
]

function Anagram() {

    const wordsLength = words.length;
    const [input,setInput] = useState('')
    const [output,setOutput] = useState()
    const [anagram,setAnagram] = useState(words[Math.floor(Math.random()*wordsLength)])
    const [isDone,setIsDone] = useState()
    const [didWin,setDidWin] = useState('')
    const [count,setCount] = useState(0)
    const [countWin,setCountWin] = useState(0)
    

    useEffect(()=>{
        setIsDone(false)
        let spellAnagram = []
        for(let i=0;i<anagram.length;i++){
            spellAnagram.push(anagram[i]) 
        }
    
        let output = spellAnagram.sort().toString().replaceAll(',',' ').toUpperCase();
        setOutput(output)
            
    },[anagram])

    function toggle(e) {
        setCount(prev=>prev+1)
        setIsDone(prev => !prev)
        reset()
        if(input.toLocaleLowerCase() === anagram.toLocaleLowerCase()) {
            setDidWin('win')
        }
        else {
            setDidWin('lose')
        }
    }

    function inputChange(e) {
        setInput(e.target.value)
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            toggle()
        }
    }

    function reset(){
        setTimeout(()=>{
            setDidWin('')
            setInput('')
            setOutput(anagram)
            setAnagram(words[Math.floor(Math.random()*wordsLength)])
        },2000)
    }

    function finalAnagram() {
        let spellAnagram = []
        for(let i=0;i<anagram.length;i++){
            spellAnagram.push(anagram[i]) 
        }
        return(spellAnagram.toString().replaceAll(',',' ').toUpperCase());
    }

  return (
    <div className="App">
        <div>
        <span>Points: {0}/{count} </span>
        <span>- {0}%</span>

        </div>
        <input onChange={inputChange} autoFocus value={input} onKeyPress={handleKeyPress} type='text'/>
        <button onClick={toggle}>Review</button>
        <h4 className="anagram">{isDone ? finalAnagram() : output}</h4>
        <h3 className="message">{didWin === 'win' ? 'Win': didWin === 'lose' ? "Lose" : didWin}</h3>
    </div>
  )
}

export default Anagram
