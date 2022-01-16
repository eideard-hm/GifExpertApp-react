import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{inputValue}</h2>
            <input
                type="text"
                placeholder="Ingrese un dato..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
