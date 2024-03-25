import TaskCard from './TaskCard'
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//console.log(data) /*Se muestra en consola el arreglo de objetos que fue importo desde 'tasks.js */

function TaskList() { /*function TaskList(props) */
  /*Recibimos el arreglo de tareas desde el componente <App> y mediante el objeto 'props'  */


  const value = useContext(TaskContext) /* Utilizamos el contexto de las tareas y desde ahi nos traerá un objeto value, definido en el <TaskContext>*/
  if (value.tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center' >No hay tareas aun</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2' >
      {value.tasks.map((task) => ( /*Por cada vez que se recorra este arreglo con map(), se va a generar un componente <TaskCard> y le mandará un props que contiene la tarea que se esta recorriendo en ese momento.  */
        <TaskCard key={task.id} task={task} deleteTask={value.deleteTask} /> /*Le pasaré al componente <TaskCard> un prop llamado 'task' y el valor será la tarea que se esta recorriendo en ese momento*/ /* Y desde <TaskList> tambien le pasaremos a <TaskCard> la funcion 'deleteTask' */
      ))}
    </div>
  );
}

export default TaskList;
