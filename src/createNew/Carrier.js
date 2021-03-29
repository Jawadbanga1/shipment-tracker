import { Form } from 'react-bootstrap'
const choices = [{name: 'USPS'}, {name: 'DHL'}, {name: 'UPS'}, {name: 'FedEx'}]

function CarrierChoices() {
    return (
        <Form.Control as="select" custom>
        {
            choices.map((item, index) => {
                return <option id={index}>{item.name}</option>
            })
        }
        </Form.Control>
    )
}

export default CarrierChoices;