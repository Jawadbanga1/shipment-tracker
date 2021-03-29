import React, {useState, useEffect} from "react"
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import CreateNew from '../createNew/CreateNew'
import fetchFunction from '../apiCalls/fetchFunction'


let fakeData = [{ name:"John1", age:30, car:null },{ name:"John2", age:30, car:null },{ name:"John3", age:30, car:null }]

function DisplayItems () {
    // const [data, setData] = useState(fakeData)
    const [text, setText] = useState('abc')

    const arrTrack = useSelector(state => state.arrTracking)
    console.log('state', arrTrack)
    const dispatch = useDispatch()

    useEffect (() => {
        // fetchFunction('/shipments').then(
        //     (rep)=>{
        //         console.log('useEffect', rep)
        //     }
        // )
    })

    function textChange(event) {
        console.log('what', event.target.value)
        setText(event.target.value)
        // setText(event)
        event.preventDefault()
    }

    function onClickSubmit () {
        dispatch({type: "newTracking", payload: text})
    }
    
    return (
        <div>
            <CreateNew/>
            {
                arrTrack.length > 0 ? arrTrack.map((item, index) => {
                    return (
                        <div>
                            <h1 key={index}>{item.id} {item.info[0].estimatedTimeOfDeliveryRemark}</h1>
                            {
                                item.info[0].events.map((itm) => {
                                    return <p>{itm.timestamp} ... {itm.location.address.addressLocality} ... {itm.description}</p>
                                })
                            }
                        </div>
                        )
                }) : null
            }
        </div>

    )
}

export default DisplayItems