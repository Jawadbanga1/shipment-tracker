import axios from 'axios'


function fetchFunction (url, trackingNum) {
    console.log('function triggered', trackingNum)
    return axios.get(url, {
        headers: {
            "DHL-API-Key":'MA2b4CeyE7dS21kedJls5MW83Y7HbIUN' 
        },params: {
            "trackingNumber": trackingNum
        }
      })
    .then(function (response) {
        // handle success
        console.log('fetch success', response);
        return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (resp) {
      // always executed
      return resp
    })
}

export default fetchFunction;