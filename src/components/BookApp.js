import { Button, TextField, Box, Typography } from '@mui/material'
import React from 'react'
import useForm from './read'

const BookApp = () => {
    var [todo, settodo] = useForm({title:'',quantity:'',description:''})

  return (
    <div className='todo-container'>
      <Box component='div' sx={{ width : '70%', m: 'auto', mt: 10, p: 2, backgroundColor:'#FFDEE9', backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)'}}>
        <TextField sx={{mt:2}} fullWidth name='title' value={todo.title} onChange={settodo} label="Todo" variant="standard"/>
        <TextField sx={{mt:2}} fullWidth name='quantity' value={todo.quantity} onChange={settodo} label="Quantity" variant="standard"/>
        <TextField sx={{mt:2}} fullWidth name='description' value={todo.description} onChange={settodo} label="Comments" variant="standard" />
        <Button sx={{mt:5}} variant='contained' color='secondary'>Submit</Button>
        <Typography sx={{mt:2}} variant='h5'>{todo.title}</Typography>
        <Typography sx={{mt:2}} variant='h5'>{todo.quantity}</Typography>
        <Typography sx={{mt:2}} variant='h5'>{todo.description}</Typography>
      </Box>
    </div>
    
  )
}

export default BookApp