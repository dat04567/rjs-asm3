import { useCallback, useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }

  return state;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
    // validate the value
  const valueIsValid = validateValue(inputState.value);
  const name = Object.keys(valueIsValid)[1]

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  
  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
    
      
  };

  const reset = useCallback( () => {
    dispatch({ type: 'RESET' });
  },[]);


  return {
    value: inputState.value,
    isValid: valueIsValid,
    isEmpty : !valueIsValid.empty,
    isTouched : inputState.isTouched,
    isValue : !name ? null : valueIsValid[name],
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;