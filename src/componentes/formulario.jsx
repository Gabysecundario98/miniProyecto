import React from "react";

export default function Formulario (){
    return (
        <form className="formulario" action="" target="blank">
            <h1>Formulario de ingreso</h1>
            <ul>
                <li>
                    <p>Nombre</p>
                    <input type="text" id="nombre" name="user_name"/>
                </li>
                <li>
                    <p>Apellido</p>
                    <input type="text" id="apellido" name="user_surname"/>
                </li>
                <li>
                   <p>Cedula</p>
                    <input type="tel" id="cedula" name="user_cedula"/>
                </li>
                <li>
                    <p>Departamento</p>
                 <select>
                    <option>Montevideo</option>
                    <option>Florida</option>
                    <option>Lavalleja</option>
                    <option>Rio Negro</option>
                    <option>Durazno</option>
                 </select>
                </li>
                <li>
                <p>Barrio</p>
                <select>
                    <option>Casabó</option>
                    <option>La Teja</option>
                    <option>El Borro</option>
                    <option>Cordón</option>
                    <option>Punta de yeguas</option>
                 </select>
                </li>
                <li>
                    <p>Correo</p>
                    <input type="email" id="mail" name="user_mail"/>
                </li>
                <li>
                    <p>Celular</p>
                    
                    <input type="tel" name="telefono"/>
                </li>
                <li>
                    <p>Edad</p>
                    <input type="number" id="edad" name="user_age"/>
                </li>
                <li>
                    <p>Profesion</p>
                    <input type="ratio" id="profesion" name="user_profesion"/>
                </li>
                <li>
                   <p>Lugar de trabajo</p>
                    <input type="text" id="empresa" name="user_job"/>
                </li>
                <button type="submit">Enviar</button>
             </ul>

         </form> 
    )
}