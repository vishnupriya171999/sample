// import React from 'react'
// import { useState } from 'react'

// export const Validation = () => {

//     const [inputValues, setInputValues] = useState({});
//     const [errors, setErrors] = useState(false);
//     const [submitted, setSubmitted] = useState(false);
//     const DobPattern =/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/; 
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     const phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/; 
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInputValues((prevValues) => ({
//             ...prevValues,
//             [name]: value
//         }));
//         setSubmitted(false)
//     }; 

//     const handleSubmit = (e) => {  
//         // e.preventDefault();
//         // setSubmitted((preV)=>{
//             //     console.log(preV);
//             // })
//             if(!inputValues.firstName?.trim() || !inputValues.Email?.trim() || !inputValues.PhoneNumber?.trim() ||
//             !inputValues.Age?.trim() || !inputValues.DOB?.trim()){
//                 setErrors(true);
//             }else {
//                 setErrors(false)
//             }
//             if(!errors){

//                 setSubmitted(true)
//             }
         
//      }; 
          
//     return (
//      <div>
        
//             <table style={{border:'1px solid black'}}>
//             <tr>
//                 <td><label>FirstName <span style={{color:'red'}}>*</span> : </label></td> 
//                 <td> <input type="text" name='firstName'value={inputValues.firstName}  onChange={handleChange}  /> 
//                 <span className='styles'>{(errors == true && !inputValues.firstName?.trim() ? 'FirstName is Required' : '') 
//                 ||
//                 (errors && inputValues.firstName.length <=2? 'Please  Enter Correct Value':' ')} </span>
//                 </td> 
//             </tr>
//             <tr>
//                 <td> <label>LastName : </label></td>
//                     <td><input type="text" name='lastName' value={inputValues.lastName} onChange={handleChange} />
//                     {/* <span className='styles'>{errors == true && !inputValues.lastName?.trim() ? 'lastName is Required' : '' }</span> */}
//                     </td>
//             </tr>
//             <tr>
//                 <td><label>Email <span style={{color:'red'}}>*</span> : </label></td> 
//                 <td><input type="text" name='Email' value={inputValues.Email} onChange={handleChange} />
//                     <span className='styles'>{(errors && !inputValues.Email?.trim() ? 'Email is Required' : '' )
//                         ||
//                         (errors &&((emailPattern.test(inputValues.Email)) ? '':' Please Enter Valid Email '))}</span>
//                     </td> 
//             </tr>
//             <tr>
//                     <td><label>Phone Number <span style={{color:'red'}}>*</span> : </label></td>
//                     <td><input type="Number" name='PhoneNumber' value={inputValues.PhoneNumber} onChange={handleChange} />
//                     <span className='styles'>{(errors && !inputValues.PhoneNumber?.trim() ? 'PhoneNumber is Required' : '') 
//                     ||
//                     (errors&&((phonePattern.test(inputValues.PhoneNumber)) ? '':' Please Enter 10 digit Number') )}</span>
//                     </td>
//             </tr>
//             <tr>

//                     <td><label>Age <span style={{color:'red'}}>*</span> : </label></td>
//                     <td><input type="Number" name='Age' value={inputValues.Age} onChange={handleChange} />
//                     <span className='styles'>{(errors && !inputValues.Age?.trim() ? 'Age is Required' : '')
//                     ||
//                     (errors &&((Number(inputValues.Age)>0 && Number(inputValues.Age)<=100) ? '':' Please  Enter Correct Age') )}</span>
//                     </td>
//             </tr>
//             <tr>
//                     <td><label>D-O-B <span style={{color:'red'}}>*</span> : </label></td>
//                     <td><input type="text" name='DOB' value={inputValues.DOB} onChange={handleChange}  />
//                     <span  className='styles'>{(errors && !inputValues.DOB?.trim() ? 'DOB is Required' : '') 
//                         ||
//                         (errors &&((DobPattern.test(inputValues.DOB)) ? '':' Please  Enter Valid Date Format') ) }</span>
//                     </td>
//             </tr>
//             <tr>
//                     <td><label>Language : </label></td>
//                     <td><input type="text" name='language' value={inputValues.language} onChange={handleChange} />
//                     {/* <span className='styles'>{errors == true && !inputValues.language?.trim() ? 'language is Required' : '' }</span> */}
//                     </td>
                    
//             </tr>
//             <tr>    <td><label>City : </label></td>
//                     <td><input type="text" name='City' value={inputValues.City} onChange={handleChange} />
//                     {/* <span className='styles'>{errors == true && !inputValues.City?.trim() ? 'City is Required' : '' }</span> */}
//                     </td>
//             </tr> 
//             <tr>    <td><label>State : </label></td>
//                     <td><input type="text" name='State' value={inputValues.State} onChange={handleChange} />
//                     {/* <span className='styles'>{errors == true && !inputValues.State?.trim() ? 'State is Required' : '' }</span> */}
//                     </td>
//             </tr> 
//             <tr>
//                     <td><label>Nationality : </label></td>
//                     <td><input type="text" name='Nationality' value={inputValues.Nationality} onChange={handleChange} />
//                     {/* <span className='styles'>{errors == true && !inputValues.Nationality?.trim() ? 'Nationality is Required' : '' }</span> */}
//                     </td>
//             </tr>
//             <button type='submit' onClick={handleSubmit}>Submit</button>
//          </table>
        
//          {!errors  && submitted && 

//             <table>
//                 <tr>
//                     <td>FirstName :</td>
//                     <td>{inputValues.firstName}</td>
//                 </tr>
//                 <tr>
//                     <td>LastName :</td>
//                     <td>{inputValues.lastName}</td>
//                 </tr>
//                 <tr>
//                     <td>Email :</td>
//                     <td>{inputValues.Email}</td>
//                 </tr>
//                 <tr>
//                     <td>Phone Number :</td>
//                     <td>{inputValues.PhoneNumber}</td>
//                 </tr>
//                 <tr>
//                     <td>Age :</td>
//                     <td>{inputValues.Age}</td>
//                 </tr>
//                 <tr>
//                     <td>D-O-B :</td>
//                     <td>{inputValues.DOB}</td>
//                 </tr>
//                 <tr>
//                     <td>Language :</td>
//                     <td>{inputValues.language}</td>
//                 </tr>
//                 <tr>
//                     <td>city :</td>
//                     <td>{inputValues.City}</td>
//                 </tr>
//                 <tr>
//                     <td>State :</td>
//                     <td>{inputValues.State}</td>
//                 </tr>
//                 <tr>
//                     <td>Nationality</td>
//                     <td>{inputValues.Nationality}</td>
//                 </tr>
//             </table>
//          }
     
//      </div>
// )

// }




import React, { useState } from 'react';

export const Validation = () => {
    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const DobPattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValid = true;

        // Checking for required fields and specific validations
        if (
            !inputValues.firstName?.trim() ||
            !inputValues.Email?.trim() ||
            !inputValues.PhoneNumber?.trim() ||
            !inputValues.Age?.trim() ||
            !inputValues.DOB?.trim()
        ) {
            setErrors(true);
            formValid = false;
        } else {
            // Additional validations (like email pattern, phone number format, etc.)
            if (!emailPattern.test(inputValues.Email)) {
                setErrors(true);
                formValid = false;
            }
            if (!phonePattern.test(inputValues.PhoneNumber)) {
                setErrors(true);
                formValid = false;
            }
            if (!DobPattern.test(inputValues.DOB)) {
                setErrors(true);
                formValid = false;
            }
            if (!(Number(inputValues.Age) > 0 && Number(inputValues.Age) <= 100)) {
                setErrors(true);
                formValid = false;
            }
        }

        if (formValid) {
            setErrors(false);
            setSubmitted(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
              
                <table style={{border:'1px solid black'}}>
           <tr>
                 <td><label>FirstName <span style={{color:'red'}}>*</span> : </label></td> 
                 <td> <input type="text" name='firstName'value={inputValues.firstName}  onChange={handleChange}  /> 
                <span className='styles'>{(errors == true && !inputValues.firstName?.trim() ? 'FirstName is Required' : '') 
                ||
                (errors && inputValues.firstName.length <=2? 'Please  Enter Correct Value':' ')} </span>
                </td> 
            </tr>
            <tr>
                <td> <label>LastName : </label></td>
                    <td><input type="text" name='lastName' value={inputValues.lastName} onChange={handleChange} />
                    {/* <span className='styles'>{errors == true && !inputValues.lastName?.trim() ? 'lastName is Required' : '' }</span> */}
                    </td>
            </tr>
            <tr>
                <td><label>Email <span style={{color:'red'}}>*</span> : </label></td> 
                <td><input type="text" name='Email' value={inputValues.Email} onChange={handleChange} />
                    <span className='styles'>{(errors && !inputValues.Email?.trim() ? 'Email is Required' : '' )
                        ||
                        (errors &&((emailPattern.test(inputValues.Email)) ? '':' Please Enter Valid Email '))}</span>
                    </td> 
            </tr>
            <tr>
                    <td><label>Phone Number <span style={{color:'red'}}>*</span> : </label></td>
                    <td><input type="Number" name='PhoneNumber' value={inputValues.PhoneNumber} onChange={handleChange} />
                    <span className='styles'>{(errors && !inputValues.PhoneNumber?.trim() ? 'PhoneNumber is Required' : '') 
                    ||
                    (errors&&((phonePattern.test(inputValues.PhoneNumber)) ? '':' Please Enter 10 digit Number') )}</span>
                    </td>
            </tr>
            <tr>

                    <td><label>Age <span style={{color:'red'}}>*</span> : </label></td>
                    <td><input type="Number" name='Age' value={inputValues.Age} onChange={handleChange} />
                    <span className='styles'>{(errors && !inputValues.Age?.trim() ? 'Age is Required' : '')
                    ||
                    (errors &&((Number(inputValues.Age)>0 && Number(inputValues.Age)<=100) ? '':' Please  Enter Correct Age') )}</span>
                    </td>
            </tr>
            <tr>
                    <td><label>D-O-B <span style={{color:'red'}}>*</span> : </label></td>
                    <td><input type="text" name='DOB' value={inputValues.DOB} onChange={handleChange}  />
                    <span  className='styles'>{(errors && !inputValues.DOB?.trim() ? 'DOB is Required' : '') 
                        ||
                        (errors &&((DobPattern.test(inputValues.DOB)) ? '':' Please  Enter Valid Date Format') ) }</span>
                    </td>
            </tr>
            <tr>
                    <td><label>Language : </label></td>
                    <td><input type="text" name='language' value={inputValues.language} onChange={handleChange} />
                    {/* <span className='styles'>{errors == true && !inputValues.language?.trim() ? 'language is Required' : '' }</span> */}
                    </td>
                    
            </tr>
            <tr>    <td><label>City : </label></td>
                    <td><input type="text" name='City' value={inputValues.City} onChange={handleChange} />
                    {/* <span className='styles'>{errors == true && !inputValues.City?.trim() ? 'City is Required' : '' }</span> */}
                    </td>
            </tr> 
            <tr>    <td><label>State : </label></td>
                    <td><input type="text" name='State' value={inputValues.State} onChange={handleChange} />
                    {/* <span className='styles'>{errors == true && !inputValues.State?.trim() ? 'State is Required' : '' }</span> */}
                    </td>
            </tr> 
            <tr>
                    <td><label>Nationality : </label></td>
                    <td><input type="text" name='Nationality' value={inputValues.Nationality} onChange={handleChange} />
                    {/* <span className='styles'>{errors == true && !inputValues.Nationality?.trim() ? 'Nationality is Required' : '' }</span> */}
                    </td>
            </tr>
            <button type='submit' onClick={handleSubmit}>Submit</button>
      
                </table>
              
            </form>

            {!errors && submitted && (
                <table style={{border:'1px solid black'}}>
                   <tr>
                    <td>FirstName :</td>
                    <td>{inputValues.firstName}</td>
                </tr>
                <tr>
                    <td>LastName :</td>
                    <td>{inputValues.lastName}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{inputValues.Email}</td>
                </tr>
                <tr>
                    <td>Phone Number :</td>
                    <td>{inputValues.PhoneNumber}</td>
                </tr>
                <tr>
                    <td>Age :</td>
                    <td>{inputValues.Age}</td>
                </tr>
                <tr>
                    <td>D-O-B :</td>
                    <td>{inputValues.DOB}</td>
                </tr>
                <tr>
                    <td>Language :</td>
                    <td>{inputValues.language}</td>
                </tr>
                <tr>
                    <td>city :</td>
                    <td>{inputValues.City}</td>
                </tr>
                <tr>
                    <td>State :</td>
                    <td>{inputValues.State}</td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td>{inputValues.Nationality}</td>
                </tr>
                </table>
            )}
        </div>
    );
};


