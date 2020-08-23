import _ from "lodash"
import { READ_EVENTS } from "../actions"

export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            console.log("READ_EVENTS")
            return _.mapKeys(action.response.data,'id')
            
        default:
            console.log(action.type)
            return events
    }
}