import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {TaskContextProvider} from "./context/TaskContext"; /*Llamamos el componente <TaskContextProvider> para ponerlo como contenedor de <App>*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Cuando trabajemos con React, es una buena práctica trabajar con la etiqueta <React.StrictMode>, con el que básicamente nos dice que se ejecutará un codigo adicional al desarrollo para saber que estoy escribiendo código correcto en React.
    React.StrictMode, durante el desarrollo de la aplicacion, detecta practicas potencialmente peligrosas, nos advierte si estamos usando caracteristicas de React deprecadas, detecta efectos secundarios inesperados, etc. 
    */}
    <TaskContextProvider> {/*Ahora, todos los componentes que se encuentren dentro de <App> podran acceder a los datos que se encuentren en el <TaskContextProvider> sin necesidad de caer en el Prop drilling */}
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
