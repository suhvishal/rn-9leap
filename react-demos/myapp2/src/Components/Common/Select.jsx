import React from 'react';

function Select({name, label, options, onChange, error}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={onChange} className="form-control">
                <option value=""></option>
                { options.map( option => (
                    <option key={option._id} value={option._id}> 
                        {option.name}    
                    </option>
                ))}
            </select>
            {error && <div className='alert alert-danger'> {error} </div>}
        </div>
    );
}

export default Select;