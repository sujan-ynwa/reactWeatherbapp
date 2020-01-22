import React, { useState, useEffect, useRef} from 'react';

function HookCounter () {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')

    const initialMount = useRef(true);

    useEffect(() => {

        if (initialMount.current) {

            initialMount.current = false;
        } else {
            console.log("asdasdasdasd----")
            console.log(counter)
        }
       
    },[name])

    return (
        < button onClick={() => setCounter(counter + 1)}> Click {counter} </button>
    )
}

export default HookCounter