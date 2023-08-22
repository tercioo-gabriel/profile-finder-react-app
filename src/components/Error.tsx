import React from 'react';

import classes from './Search.module.css'

const Error = () =>{
  return (
    <div>
      <p className={classes.error}>Usuário não encontrado !! :c</p>
    </div>
  );
};

export default Error;