import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import blacks from '../static/assets/images/black-search.svg'
import { driverSet } from '../components/constants'

const Search = () => {

    const handleChange = (event) => {
        let text = event.target.value;
        let result = document.getElementById('result');
        result.innerHTML = "";
    
        if (text == "") {
            return null;
        }
    
        let foundElems = driverSet.filter(x => x.toLowerCase().indexOf(text.toLowerCase()) == 0)
        for (let elem of foundElems) {
            let link = document.createElement('a');
            link.className = "d-block";
            link.innerText = elem;
            link.href = "#";
            result.appendChild(link);
        }
    };

    return (
        <div className="search-2">
            <InputGroup className="mb-3" onChange={handleChange}>
            <InputGroup.Text id="basic-addon1">
                <div className="search-2-icon"><img src={blacks} alt="blacksearch"/></div>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Введите название драйвера"
                    aria-label="Drivername"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <div id="result"></div>
        </div>
    );
}

export default Search