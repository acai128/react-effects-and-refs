import React, { useState, useEffect } from "react"; 
import axios from "axios";

const base_URL = "https://deckofcardsapi.com/api/deck/"; 

function Deck(){
    const [card, setCard] = useState({}); 
    const [deck_id, setDeck_id] = useState({}); 

    const handleClick = evt => {
        console.log(evt.target.value); 
       setDeck_id(evt.target.value);
    }

    // useEffect(function(){
    //     async function fetchUser() {
    //         const cardResult = await axios.get(
    //             `${base_URL}`);  
    //             setCard(cardResult.data); 
    //             console.log(cardResult.data); 
    
            
    useEffect(function(){
        async function getCard(){
            try{
            const deck_id = setCard.deck_id;
            const card_URL = `${base_URL}/${deck_id}/draw/`;
             
            const cardResponse = await axios.get(
                "https://deckofcardsapi.com/api/deck/h2sutgo0slv1/draw/"); 
                setCard(cardResponse.data); 
                console.log(cardResponse.data); 
                if(cardResponse.remaining === 0) { throw new Error("No card remaining!")}; 
            const card = cardResponse.data.cards[0]; 
            
                
            }   
            catch(err) {
                alert(err)
            }
            
          
        }
            getCard(); 
        }, [setCard])


    
    return (
        <div>
            <h1>Card</h1>
            <button onClick={handleClick}>New Card</button>
        </div>
    )
}

export default Deck; 