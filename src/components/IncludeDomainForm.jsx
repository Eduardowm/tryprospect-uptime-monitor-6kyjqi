import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addDomain} from '../redux/actions'

const IncludeDomainForm = () => {
    const [domain, setDomain] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setDomain(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addDomain(domain))
        setDomain('')
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label for="domain">New Domain: </label>
            <input type="text" id="domain" name="domain" value={domain}
                   onChange={(event) => handleChange(event)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default IncludeDomainForm;
