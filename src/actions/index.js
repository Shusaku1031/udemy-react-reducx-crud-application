import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
        console.log(`${ROOT_URL}/events${QUERYSTRING}`)
        const response = await axios.get("https://udemy-utils.herokuapp.com/api/v1/events?token=token123")
        console.log(response)
        dispatch({type: READ_EVENTS, response})
}
