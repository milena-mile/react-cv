import {State} from "../types/types.ts";

const CVServices = (props: string, category: string, stateFunc: (prevState: State) => void) => {
    fetch(props)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const newState: State = {
                data: data[category],
                loaded: true,
                error: false
            };
            stateFunc(newState);
        })
        .catch(error => console.log('Error:', error))
}

export default CVServices;