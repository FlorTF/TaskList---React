import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  /*function TaskForm(props) Con el context, no es necesario usar 'props', ya que traeremos los datos directamente desde <TaskContext>, importandolo primero */
  /*El argumento 'props' es para indicarle al componente <TaskForm> que esta recibiendo un 'props' y es una funcion llamada 'createTask'*/

  const [title, setTitle] =
    useState(
      ""
    ); /*Crearemos un estado para guardar una nueva tarea en la variable 'title', la variable 'title' se esta inicializando como un string vacio */
  const [description, setDescription] = useState("");
  const value =
    useContext(
      TaskContext
    ); /*Establecemos que contexto usaremos para traer los datos y guardaremos los datos que trae desde <TaskContext> en un objeto llamado 'value' */

  const handleSubmit = (e) => {
    e.preventDefault(); /*Por defecto al hacer submit en un form, la página se actualizará (reiniciará). Por ello usaremos preventDefault para quitarle esta caracteristica*/

    // const newTask = { /*Crearemos un objeto que se parezca a uno de los elementos del arreglo, al que queremos añadir un objeto más */
    //     title: title, /*Despues que se active el setTitle() con el onChange del boton submit, el valor tipeado en el 'input' se guardará en la variable 'title'. Es por ello que al crear un nuevo objeto (similar a los demás elementos del arreglo) le estamos asignando el valor del input guardado 'title', en una nueva variable del objeto que tambien se llama 'title'*/
    //     id:4,
    //     description: "ga "
    // }

    const newTaskTitle =
      title; /*Despues que se active el setTitle() con el onChange del boton submit, el valor tipeado en el 'input' se guardará como string en la variable 'title' y luego creamos una variable 'newTaskTitle' que me almacene dicho valor*/
    const newTaskDescription = description;

    value.createTask(
      newTaskTitle,
      newTaskDescription
    ); /*Ingresaremos como parámetro la variable 'newTaskTitle' (que es un string) en la funcion 'createTasks' para enviarlo como dato al componente <App> */

    setTitle(
      ""
    ); /*Despues de enviar los datos mediante el onSubmit, modificaremos los estados a un string vacio, es decir, volviendolo a su valor inicial */
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto" >
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-3" >Make your tasks</h1>
        {/* La funcion 'handleSubmit' va sin parentesis, ya que no lo queremos ejecutar de inmediato, sino que se ejecute luego de accionar el evento 'onSubmit' */}
        <input
          className="bg-slate-200 p-3 w-full mb-2"
          placeholder="Write your task"
          onChange={
            (event) =>
              setTitle(
                event.target.value
              ) /*Mientras el usuario va tipeando un valor el input, este valor se estará guardando en la variable 'title' (mediante el setTitle)*/
          }
          value={
            title
          } /*El valor del estado 'title', se reflejará en el 'input', recordar que en el onSubmit establecimos que despues de enviar los datos con 'props' el estado del 'title' será un string vacio.  */
        />
        <textarea
          className="bg-slate-200 p-3 w-full mb-2"
          placeholder="Write your description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
