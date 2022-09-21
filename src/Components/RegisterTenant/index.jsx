import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import NavLanding from "../Nav"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterTenant() {
    return(
        <>
        <NavLanding />
        <div className="wrapperRegister">

          <div className="containerForm">
            <div className="info">
              <p>Regístrate conocer los gastos del condominio</p>
            </div>
            <div>
              <Formik
				initialValues={ {
					name: '',
					lastName: '',
          email: '',
          numberPhone: '',
          nameCondominium: '',
          password: '',
          confirmPassword: ''
				}}
				validate={(valores) => {
					let errors = {}
					
					// Name_user validation
					if(!valores.name){
						errors.user = 'Ingresa tu nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
						errors.name = 'Coloca un nombre válido'
					}
          // LastName validation
          if(!valores.lastName){
						errors.lastName = 'Ingresa tu apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)){
						errors.lastName = 'Coloca un apellido válido'
					}
          // email Validation REGEX
          if(!valores.email){
						errors.email = 'Ingresa un correo' 
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errors.email = 'Correo invalido'
					}
          // numberPhone validation  REGEX
          if(!valores.numberPhone){
						errors.numberPhone = 'Ingresa tu apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.numberPhone)){
						errors.numberPhone = 'Coloca un número válido'
					}
          // numberCondominium  REGEX
          if(!valores.nameCondominium){
						errors.nameCondominium = 'Ingresa tu apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nameCondominium)){
						errors.nameCondominium = 'El nombre de tu condominio es inválido'
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
					{( {values, errors, touched,} ) => (
						<Form className="form" id="register">
							<p>Regístrate</p>

              <div className="containerNameLast">
                <div>
							<div className="label">
								<label htmlFor="name">Nombre</label>
							</div>							
							<Field className='input' 
								type="text" 
								id="input2" 
								name="name" 
								placeholder="John" 
								/> 
								{touched.name && errors.name && <div className="errors">{errors.name}</div>}
						</div>

            <div>
              <div className="label">
                <label htmlFor="lastName">Apellido</label>
              </div>
              <Field className='input' 
                type='text'
                id="input2"
                name='lastName'
                placeholder='Doe'
              />
              {touched.lastName && errors.lastName && <div className="errors">{errors.lastName}</div>}
            </div>
              </div>
						

            <div className="label">
              <div>
                <label htmlFor="email">Correo</label>
              </div>
              <Field className='input'
                type="email" 
								id="email" 
								name="email" 
								placeholder="Correo"
              />
              {touched.email && errors.email && <div className="errors">{errors.email}</div>}
            </div>

            <div className="label">
              <div>
                <label htmlFor="numberPhone">Número telefónico</label>
              </div>
                <Field className='input'
                type='text'
                id='numberPhone'
                name='numberPhone'
                placeholder= '55-55-55-55-55'
              />
              {touched.numberPhone && errors.numberPhone && <div className="errors">{errors.numberPhone}</div>}
            </div>

            <div>
              <div className="label">
                <label htmlFor="nameCondominium">Nombre del condominio</label>
              </div>
              <Field className='input'
                type='text, number'
                id='nameCondominium'
                name='nameCondominium'
                placeholder='Aromo'
              />
              {touched.nameCondominium && errors.nameCondominium && <div className="errors">{errors.nameCondominium}</div>}
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

            <div>
							<div className="label">
								<label htmlFor="nombre">Confirma tu contraseña</label>
							</div>
							
							<Field className='input'
								type="text" 
								id="confirmPassword" 
								name="confirmPassword" 
								placeholder="Confirma tu contraseña" 
								
								/>
								{touched.confirmPassword && errors.confirmPassword && <div className="errors">{errors.confirmPassword}</div>}
						</div>
						<button className="buttonLogin" type="submit">Registrar</button>
					</Form>		
					)}
			</Formik>
            </div>
          </div>
			
					</div>
        </>
        
    )
}