import React, { useState } from 'react'

const useForm = (todo) => {
    var [val, setValue] = useState(todo);

  return [val, (event) =>{
    setValue({
        ...val,[event.target.name]:event.target.value
    })
  }]
}

export default useForm