import { useState } from "react";

export const useForm = (initalForm={}) => {
  
    const [formState, setformState] = useState(initalForm);
 
    const onChanged=({target}) => {
        const {name, value} = target;

        setformState({
            ...formState,
            [name]: value
        });
    }

    const onClearForm = ()=> {
        setformState(initalForm);
    }
  
    return {
        ...formState,
        formState,
        onChanged,
        onClearForm
  }
}
