
import poem from '../poem/poem.txt';
import { useState } from 'react';




const Fetch = () => {

    const [lyrics, setLyrics] = useState(5);

    function fetchTodos() {
        return (
            fetch(poem)
                .then(response => response.text())
                .then(text => setLyrics(text))

        )
    }






    fetchTodos(lyrics)

    return (
        <div>

            <div>
                <div>{lyrics}</div>
            </div>

        </div>

    )
}



export default Fetch;