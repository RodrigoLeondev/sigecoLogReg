import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import NavLanding from "../Nav"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormLogin() {
    

  	return (
  		<>
			<NavLanding />

			<div className="wrapper">
			<Formik
				initialValues={ {
					user: '',
					password: ''
				}}
				validate={(valores) => {
					let errors = {}
					
					// User validation
					if(!valores.user){
						errors.user = 'Ingresa un correo'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.user)){
						errors.user = 'Correo invalido'
					}
					// Password Validation, cambiar regex
					if(!valores.password){
						errors.password = 'Ingresa un correo'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.password)){
						errors.password = 'Contraseña con carácteres inválidos'
					}
					return errors
					
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm() // Clean Form
					console.log('Formulario enviado')
				}}
				>
					{( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
						<Form className="form">
							<p>Iniciar Sesión</p>
						<div>
							<div className="label">
								<label htmlFor="nombre">Usuario</label>
							</div>
							
							<Field className='input'
								type="email" 
								id="name" 
								name="user" 
								placeholder="Correo" 
								/>
								{/* <ErrorMessage name='user' component={()=> {
									<p>{errors.user}</p>
								}}/> */} 
								{touched.user && errors.user && <div className="errors">{errors.user}</div>}
						</div>

						<div>
							<div className="label">
								<label htmlFor="nombre">Contraseña</label>
							</div>
							
							<Field className='input'
								type="text" 
								id="password" 
								name="password" 
								placeholder="Contraseña" 
								
								/>
								{touched.password && errors.password && <div className="errors">{errors.password}</div>}
						</div>
						<button className="buttonLogin" type="submit">Entrar</button>
						<div className="lostPass">¿Olvidaste tu contraseña?</div>
					</Form>		
					)}
			</Formik>
					</div>


  		</>
)
}


