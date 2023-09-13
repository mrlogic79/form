import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import Personalerror from './Personalerror';

const FavoritsField =({form, push, remove})=> {
    const {favorits} = form.values;
    return(
        <>
            <i className='fas fa-plus text-success mx-3 pointer' onClick={()=>push('')}></i>
            <label htmlFor="telePhone" className="form-label">علایق</label>
            {favorits.map((f,i)=>(
                <div key={i} className="position-relative">
                    <FastField type="text" className="form-control" name={`favorits[${i}]`}/>
                    {
                        favorits.length > 1 ? (
                            <i className='fas fa-minus-circle text-danger mx-1 pointer delete_icon' onClick={()=>remove(i)}></i>
                        ) : null
                    }
                    <ErrorMessage name={`favorits[${i}]`} component={Personalerror}/>
                </div>

            ))}
        </>
    )
}

export default FavoritsField;
