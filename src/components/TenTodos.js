import React from 'react';
import {useDispatch} from 'react-redux';
import {extendTodo}from '../reducers/actions';
import 'bootstrap/dist/css/bootstrap.css';

function TenTodos() {
	let dispatch=useDispatch();
  return (
<div>
<br/>
<br/>
<br/>
<br/>
<hr/>
<div className="text-center">
<h1>WELCOME TO LPU PARKING</h1>
				<button 
					onClick={()=>
					{
					
						
						dispatch(extendTodo(
						));
					}}
				className="btn btn-primary  mx-2"><strong>UNI MALL PARKING</strong></button>
				
				
				<hr/></div></div>
  );
}

export default TenTodos;
