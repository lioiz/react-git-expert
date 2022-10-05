import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => { -- En este caso sería event.target.value
    const onInputChange = ({target}) => {

        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {

        event.preventDefault();

        const inputValueTrimed = inputValue.trim();

        if( inputValueTrimed.length <= 1 ) return;

        // setCategory( categories => [...categories, inputValue] );
        onNewCategory( inputValueTrimed );
        setInputValue( '' );
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type='text' 
            placeholder='Buscar Gif'
            value = {inputValue}
            onChange = { onInputChange }
        />
    </form>
  )
}
