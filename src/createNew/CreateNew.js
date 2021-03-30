import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import fetchFunction from '../apiCalls/fetchFunction'


const choices = [{name: 'USPS'}, {name: 'DHL'}, {name: 'UPS'}, {name: 'FedEx'}]


function CreateNew () {

    const [text, setText] = useState('abc')
    const [apiData, setApiData] = useState()
    const dispatch = useDispatch()

    function onClickSubmit (event) {
        console.log('event', event)
        event.preventDefault()
        fetchFunction('https://api-eu.dhl.com/track/shipments', text).then(
            (resp)=>{
                console.log('useEffect', resp)
                setApiData(resp.data.shipments)
                return resp.data
            }
        ).then((resp) => {
            dispatch({type: "newTracking", payload: {'trackingNum': text, info: resp.shipments}})
        })
    }

    function textChange(event) {
        console.log('what', event.target.value)
        setText(event.target.value)
        // setText(event)
        event.preventDefault()
    }

    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control type="text" placeholder="Tracking #" onChange={(data)=>textChange(data)}/>
                </Col>
                <Col>
                    <Form.Control as="select" custom>
                        {
                            choices.map((item, index) => {
                                return <option key={index}>{item.name}</option>
                            })
                        }
                    </Form.Control>
                </Col>
                <Col>
                    <Button type="submit" onClick={(event) => onClickSubmit(event)}>Submit</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default CreateNew
