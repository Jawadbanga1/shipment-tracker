import React, {setState, useState} from "react"
import axios from 'axios'

let fakeData = [{ name:"John1", age:30, car:null },{ name:"John2", age:30, car:null },{ name:"John3", age:30, car:null }]

function DisplayItems () {
    const [data, setData] = useState(fakeData)
    const [text, setText] = useState('abc')

    

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
    });

    function textChange(e1) {
        console.log(e1.target)
        // setText(e1)
        // preventDefault()
    }
    
    return (
        <div fl>
            {
                fakeData.map((item, index) => {
                    return <h1 id={index}>{item.name}</h1>
                })
            }
            <input type="text"  name="name" onChange={(data)=>textChange(data)} />
        </div>

    )
}

export default DisplayItems