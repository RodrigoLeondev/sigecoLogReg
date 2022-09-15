import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default function FormLogin() {
    

  	return (
  		<>
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
					<Form className="formLogin">
						<div>
							<label htmlFor="nombre">Usuario</label>
							<Field 
								type="email" 
								id="name" 
								name="user" 
								placeholder="Correo" 
								/>
								{/* <ErrorMessage name='user' component={()=> {
									<p>{errors.user}</p>
								}}/> */} 
								{touched.user && errors.user && <p>{errors.user}</p>}
						</div>

						<div>
							<label htmlFor="nombre">Contraseña</label>
							<Field 
								type="text" 
								id="password" 
								name="password" 
								placeholder="Contraseña" 

								/>
								{touched.password && errors.password && <p>{errors.password}</p>}
						</div>
						<button type="submit">Entrar</button>
						<p>¿Olvidaste tu contraseña?</p>
					</Form>		
					)}
			</Formik>


  		</>
)
}


