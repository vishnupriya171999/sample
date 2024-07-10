// import React, { useState } from 'react';

// const Dynamic = () => {
//   const [state, setState] = useState({inputFields: [],dropdownValues: [{}],radioValues: [],dateValues :[],
//     showDropdownPopup: false,showRadioPopup: false,dropdownInput: '',radioInput: '',
//   });

//   const addInputField = () => {
//     setState(prevState => ({
//       ...prevState,
//       inputFields: [...prevState.inputFields, '']
//     }));
//   };

//   const openDropdownPopup = () => {
//     setState(prevState => ({
//       ...prevState,
//       showDropdownPopup: true
//     }));
//   };
//   const addDate = ()=>{
//     setState(prevState => ({
//         ...prevState,
//         dateValues: [...prevState.dateValues, '']
//       }));
//   }

//   const addDropdownValue = () => {
//     setState(prevState => ({
//       ...prevState,
//       dropdownValues: [...prevState.dropdownValues, prevState.dropdownInput],
//     //   showDropdownPopup: false,
//       dropdownInput: ''
//     }));

//     console.log('droppp' , state.dropdownInput)
//   };

//   const openRadioPopup = () => {
//     setState(prevState => ({
//       ...prevState,
//       showRadioPopup: true
//     }));
//   };

//   const addRadioValue = () => {
//     setState(prevState => ({
//       ...prevState,
//       radioValues: [...prevState.radioValues, prevState.radioInput],
//     //   showRadioPopup: false,
//       radioInput: ''
//     }));
//     console.log('state' ,state.radioInput)
//   };


//   return (
//     <div>
//       <button onClick={addInputField}>Add Input</button>
//       <button onClick={openDropdownPopup}>Dropdown</button>
//       <button onClick={openRadioPopup}>Radio</button>
//       <button onClick={addDate}>Date</button><br /><br />


//       {state.inputFields.map((index) => (
//         <>
//         <input key={index} type="text"  /><br /><br />
//         </>
//       ))}
//       {state.dateValues.map((index) => (
//         <>
//         <input key={index} type="date"  /><br /><br />
//         </>
//       ))}

//       {state.dropdownValues.length > 0 && (
//         <select>
//           {state.dropdownValues.map((value, index) => (
//             <option key={index}>{value}</option>
//           ))}
//         </select>
//       )}

//       {state.radioValues.length > 0 && (
//         <div>
//           {state.radioValues.map((value, index) => (
//             <div key={index}>
//               <input type="radio" id={`radio${index}`} name="dynamicRadio" />
//               <label htmlFor={`radio${index}`}>{value}</label>
//             </div>
//           ))}
//         </div>
//       )}
//       {state.showDropdownPopup && (
//         <div>
//           <input
//             type="text"
//             value={state.dropdownInput}
//             onChange={e => setState({ ...state, dropdownInput: e.target.value })}
//             placeholder="Enter dropdown value"
//           />
//           <button onClick={addDropdownValue}>Add</button>
//           <button onClick={() => setState({ ...state, showDropdownPopup: false })}>Cancel</button>
//         </div>
//       )}

//       {state.showRadioPopup && (
//         <div>
//           <input
//             type="text"
//             value={state.radioInput}
//             onChange={e => setState({ ...state, radioInput: e.target.value })}
//             placeholder="Enter radio value"
//           />
//           <button onClick={addRadioValue}>Add</button>
//           <button onClick={() => setState({ ...state, showRadioPopup: false })}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dynamic;



import React, { useState } from 'react'

const Dynamic = () => {
    const [input, setInput] = useState([{}]);
    const handleInputAdd = () => {
        setInput([...input, { id: input.length, type: "input", value: "" }]);
    }

    const handleDropDownAdd = () => {
        let dropDownPopupValue1 = prompt("Enter dropdown value");

        try {
            if(dropDownPopupValue1 !== null && dropDownPopupValue1.trim() !== '' ){

            
            setInput([...input, { id: input.length, type: "dropDown", value: [] }]);

            let condition = true;
            while (condition) {
                let dropDownPopupValue = prompt("Enter dropdown value");
                if (dropDownPopupValue == null) {
                    condition = false;
                    break;
                }
                else {
                    setInput(prevValues => {
                        return prevValues.map(field =>
                            field.id === prevValues.length - 1
                                ? { ...field, value: [...field.value, dropDownPopupValue] }
                                : field
                        );
                    });
                }
            }}
        } catch (error) {
            console.log('error', error)
            throw error;
        }

    }
    const handleRadioAdd = () => {
        let radioPopupValue1 = prompt("Enter radio value");
        console.log(radioPopupValue1)
        try {
            if (radioPopupValue1 !== null && radioPopupValue1.trim() !== '') {


                setInput([...input, { id: input.length, type: "radio", value: [radioPopupValue1] }]);
                let condition = true;
                while (condition) {
                    let radioPopupValue = prompt("Enter radio value");
                    if (radioPopupValue == null) {
                        condition = false;
                        break;
                    }
                    else {
                        setInput(prevValues => {
                            console.log(prevValues.length)
                            return prevValues.map(field =>
                                field.id === prevValues.length - 1
                                    ? { ...field, value: [...field.value, radioPopupValue] }
                                    : field
                            );
                        });
                    }
                }
            }

        } catch (error) {
            console.log('error', error)
            throw error;
        }

    }
    const handleDateAdd = () => {
        setInput([...input, { id: input.length, type: "date", value: "" }]);
    }

    return (
        <div>
            <button onClick={handleInputAdd}>    Input     </button>
            <button onClick={handleDropDownAdd}> DropDown  </button>
            <button onClick={handleRadioAdd}>    Radio     </button>
            <button onClick={handleDateAdd}>     Date      </button><br /><br />
            {input.map((values) => {
                return <>
                    <div key={values.id}>
                        {values.type == "input" ? <><input /><br /><br /></> : ''}
                        {values.type == "date" ? <><input type="date" /><br /><br /></> : ''}
                        {values.type == "radio" ? <>{values.value.map((value, index) =>
                            <><input type="radio" name={values.id} />
                                <label key={index}>{value}</label></>)}<br /><br /></> : ''}
                        {values.type == "dropDown" ? <><select>{values.value.map((value, index) =>
                            <option key={index}>{value}</option>)}</select><br /><br /></> : ''}
                    </div>
                </>
            })}
        </div>
    )
}

export default Dynamic






