import React from 'react';
import {FormComponent} from "./styles";

const Form = ({children, column, row_gap, column_gap, pointer_events, height}) => {

    return (
        <FormComponent column={column} row_gap={row_gap} column_gap={column_gap} pointer_events={pointer_events} height={height}>
            {children} 
        </FormComponent>
    );
}

export default Form;
