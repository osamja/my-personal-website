import axios from 'axios';

function logMorphError(message) {
    console.log('Error message being logged', message)

    axios.post('https://sammyjaved.com/morph/log', message, {headers: {'Authorization': 'ImageMorpherV1'}})
        .then(response => {
            console.log('successfully logged error message')
            console.log(response);
        })
        .catch(error => {
            console.error(error)
        });
}

export default logMorphError;
