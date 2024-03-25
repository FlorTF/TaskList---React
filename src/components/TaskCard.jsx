import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

/*Aqui no podemos traer la tarea desde el contexto, ya que 'task' es un iterador que viene desde <TaskList> para que sea usado en <TaskCard>. Pero lo que sí podemos traer desde el contexto, es la funcion 'deleteTask' */
function TaskCard(props) { /*function TaskCard(props): Recibimos las props que viene desde <TaskList>, una prop es la tarea que se esta recorriendo en ese momento y la otra es la funcion 'deleteTask'. */
  
const value = useContext(TaskContext) /* Utilizamos el contexto de las tareas y desde ahi nos traerá un objeto value, definido en el <TaskContext>*/

  return (
    <div className="bg-gray-800 text-white  p-4 rounded-md" >
      <h1 className="text-xl font-bold capitalize" >{props.task.title}</h1>
      <p className="text-gray-400 text-sm" >{props.task.description}</p>
      <button className = 'bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'
        onClick={ () => value.deleteTask(props.task.id) } /*Llamaremos a la funcion 'deleteTask' pero sin parentesis () ya que no la queremos ejecutar de inmediato, sino despues de accionar el evento 'onClick' del button, aparte que esta funcion en el console.log nos muestra la informacion del evento (como si le hubiesemos puesto en el parametro el 'event'). Para que no nos muestre todo el objeto 'event' pondremos la funcion 'deleteTask' dentro de una funcion anonima, y como parámetro tendrá el id de la tarea, que tambien la trajimos con 'props' desde <TaskList> */
      > Delete </button>
    </div>
  );
}

export default TaskCard;
