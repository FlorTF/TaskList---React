/*Para evitar el Prop drilling: Proceso en el que las propiedades (props) se pasan de un componente a otro, incluso cuando los componentes intermedios no necesitan esas props directamente.
Crearemos un contexto que englobe el componente <App>, y que sea dueño del estado, es decir que contenga el arreglo de tasks */

/*En React, cuando queremos que dentro de un componente haya mas componentes, estos actuarán como elementos hijos. Hay una propiedad que se llama 'children' y esto se recibe dentro del objeto 'props'. */

import {
  createContext,
  useState,
  useEffect,
} from "react"; /*Importamos desde React, una funcion llamada createContext() que me retornará un objeto*/

import { tasks as data } from "../data/tasks"; /*El arreglo de tareas se llamará 'data' */

export const TaskContext =
  createContext(); /*Aqui nombramos el nombre del contexto, pero para crear el contenedor o componente, usaremos el Provider. 
'TaskContext' almacena los datos, pero 'TaskContextProvider' es el componente que engloba los demas componentes.*/

export function TaskContextProvider(props) {
  /*Ahora, todos los componentes que se encuentren dentro de <App> podran acceder a los datos que se encuentren almacenados en <TaskContextProvider> sin necesidad de caer en el Prop drilling.*/ /*Siguiendo esa lógica es aqui donde almacenaremos nuestro estado */ /*Estamos trayendo el estado de tasks al contexto 'TaskContext' para que los otros componetes que esten dentro, tambien puedan acceder al estado(arreglo de 'tasks'). */

  const [tasks, setTasks] = useState([]);
  /*Crearemos una variable 'tasks' que se inicializará como un arreglo vacio, y crearemos una funcion 'setTasks' que nos indicará como se modificará el arreglo 'tasks'*/
  /* useState([]): Es el equivalente de const tasks = []. La constante 'tasks' será un arreglo vacio*/
  /* useState(tasks): Nos sale error ya que 'tasks' no esta disponible o no existe en el componente, para poder ser asignado. Es por ello que le asignaremos primero un arreglo vacio, y luego con un useEffect (cuando solo cargue el componente por primera vez), le indicaremos que dentro de ese arreglo vacio iran las 'tasks' */

  function createTask(taskTitle, taskDescription) {
    /*Le pasamos un parámetro llamado 'taskTitle', que será un string que contendrá el titulo de la tarea nueva a agregar en el arreglo de objetos */
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]); /*Con setTasks() estamos modificando el arreglo, añadiendole un elemento más al arreglo*/ /* Esta sintaxis [...tasks, {}] nos crea un nuevo arreglo (sin modificar el arreglo original 'tasks'), donde los primeros elementos pertenecen al arreglo 'tasks' y le agregaremos un nuevo elemento en forma de objeto */
  } /*Esta funcion lo pasaremos como un 'props' llamado createTask={createTask} desde el componente <App> hasta el componente <TaskForm>*/

  function deleteTask(taskId) {
    /*Esta funcion quitará algun elemento del arreglo 'tasks'. Pasaremos como props esta funcion al componente <TaskList> y luego <TaskList> se lo pasará a <TaskCard> ya que ahi se encuentra el boton de 'delete' que le dará funcionalidad a esta funcion*/
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    ); /*Del arreglo 'tasks', tendremos la variable 'task' que representará cada uno de los elementos del arreglo, y si el task.id del 'task' que en ese momento esta iterando es diferente del 'taskId' (dato que obtenemos desde <TaskCard> como id del elemento que queremos eliminar), este no se mostrará en el nuevo arreglo 'task'. EL filter() recorre todo el arreglo, y crea un nuevo arreglo con todos los elementos que sí cumplan la condicion establecida.  */
  }

  useEffect(() => {
    /* Se desencadenará la logica de useEffect solo cuando cargue el componente por primera vez*/
    setTasks(
      data
    ); /*Se actualizará el estado de tasks (inicialmente un arreglo vacio) con el arreglo que se encuentra en la variable 'data' */
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          /*Aqui va los valores que vamos a pasar a los diferentes componentes dentro de <TaskProvider> */
          tasks:
            tasks /*Le pasaremos una propiedad llamada 'tasks', cuyo valor será el arreglo de tareas 'tasks' */,
          deleteTask:
            deleteTask /*Otra sintaxis de 'deleteTask: deleteTask' es simplemente 'deleteTask' */,
          createTask: createTask,
        }}
      >
        {/*Desde 'TaskContex' voy a estar creando un 'Provider' dentro recibirá a los 'children' mediante el objeto 'props' y los renderizará */}
        {props.children}
        {/*Aquí se renderizan los componentes hijos que le pasamos desde <App> a <TaskContextProvider> mediante el objeto 'props' */}
      </TaskContext.Provider>
    </>
  );
}
