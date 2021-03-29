import axios from 'axios'
import React, {useState, useEffect} from 'react'

function ApiCall () {
    const [state, setState] = useState({data: []})

    useEffect (
        // axios.get('/shipments', {
        //     headers: {
        //         "DHL-API-Key":'MA2b4CeyE7dS21kedJls5MW83Y7HbIUN' 
        //     },params: {
        //         "trackingNumber": '6326076223'
        //     }
        // })
        // .then(function (response) {
        //     // handle success
        //     console.log(response)
        //     // return response
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
        // .then(function () {
        //     // always executed
        //     console.log('state1', state)
        //     // setState({state.data: response.data})
        // });

    axios.get('/shipments', {
        headers: {
            "DHL-API-Key":'MA2b4CeyE7dS21kedJls5MW83Y7HbIUN' 
        },params: {
            "trackingNumber": '6326076223'
        }
      })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    })


    )

    return (
        state.data
    )

}
    
export default ApiCall
    
    