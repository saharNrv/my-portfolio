import React from 'react';

export default function Input(props) {

    const element=props.element==='input'?(
        <input
         type={props.type}
         placeholder={props.placeholder}
         className={props.className}
         />
    ):(
        <textarea
        className={props.className}
        placeholder={props.placeholder}

        ></textarea>
    )

  return (
    <div>
      {element}
    </div>
  );
}
