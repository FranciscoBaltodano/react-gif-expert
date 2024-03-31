import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    // lo que se escribe en el input
    const [inputValue, setInputValue] = useState('One Punch');
    
    // cada vez que se presione una tecla en el input
    const onInputChange = (event) => {
        setInputValue( event.target.value )
    };

    // cuando se envie el formulario
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };
    
    return (
        <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="buscar gifs"
                    value={ inputValue }
                    // el onchange es obligatorio porque si no, el input es readOnly
                    // onChange={ event => onInputChange(event) }
                    onChange={ onInputChange }
                />
        </form>
    );
};
