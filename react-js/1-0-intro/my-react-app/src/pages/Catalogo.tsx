import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Catalog() {

    const [tweets, setTweets] = useState<string[]>([]); 
    // queremos um array de tweets iniciado em vazio
    // primeiro retornarvel é a variável em si e a segunda é uma função
    // para atualizar a listagem de tweets

    function createTweet() {
      let new_tweet = 'Tweet' + String(tweets.length + 1)
      setTweets([...tweets, new_tweet]) // substitui valor da variável
    } // concatenando/salvando com o valor antigo

    function clearTweets() {
      setTweets([])
    }
    return (
        <div>
            <h1>This is your twitter profile!</h1>
            <div>
                <h3>Main:</h3>
                <span>
                    <button 
                        onClick={createTweet}
                        style={{ // 1 chave -> react, 2 chave -> obj javascript
                        backgroundColor: '#00acee',
                        border: 0,
                        borderRadius: '10px',
                        padding: '6px 12px',
                        marginInlineEnd: '4px'
                        }}
                    >
                        Adicionar tweet
                    </button>
                </span>
                <span>
                    <button onClick={clearTweets}>Clear tweets</button>
                </span>
                <div>
                    {tweets.map(tweets => { // creates new array with the results of calling a provided function
                    return <Tweet text={tweets} /> // returning Tweet Components 
                    })}
                </div>
            </div>
        </div>
    )
}