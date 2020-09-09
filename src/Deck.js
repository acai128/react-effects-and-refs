import React, { useState, useEffect } from "react"; 
import axios from "axios";


function Deck(){
    const [card, setCard] = useState(null); 
    const [deckId, setDeck_id] = useState(''); 
    const url = "https://deckofcardsapi.com/api/deck/"; 
    const [count, setcount] = useState(''); 

    useEffect(function(){
        async function deckUser(){
            console.log('running useEffect******')
            const deckResult = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"); 
            setDeck_id(deckResult.data.deck_id); 
        }
        deckUser()
    }, []); 
            
    const handleClick = () => {
        if(setCount === 21){
            return ("You win!")
        }
        async function drawCard() {
            console.log('deckId...', deckId)
            const card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
            setCard(card.data); 
            console.log('card.data...', card.data)
            
        }
        drawCard()

    }

    function getCard(){
        if(card.remaining === 0){
            return alert("No more cards!"); 
        } 
        console.log('this is the current card...', card)
        const cardD = card.cards[0]; 
        setCount(cardD.value); 
        console.log('cardD...', cardD.image)
        console.log(cardD.value)
        return (
            <div>
                <img src={cardD.image} />
                <p>Count: {cardD.value}</p>
            </div>
            )
    }

    // function cardCount(){
    //     let cardNums = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    //     cardTotal = 
    // }
            
        //     const cardResponse = await axios.get(
        //         "https://deckofcardsapi.com/api/deck/h2sutgo0slv1/draw/"); 
        //         setCard(cardResponse.data); 
        //         console.log(cardResponse.data); 
        //         if(cardResponse.remaining === 0) { throw new Error("No card remaining!")}; 
        //     const card = cardResponse.data.cards[0]; 
            
                
        //     }   
        //     catch(err) {
        //         alert(err)
        //     }
            
          
        // }
        //     getCard(); 
        // }, [setCard])


    
    return (
        <div>
            <h1>Card</h1>
            <div>{card && getCard()}</div>
            <button onClick={handleClick}>New Card</button>

        </div>
    )
}

export default Deck; 