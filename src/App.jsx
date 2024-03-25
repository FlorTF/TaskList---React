import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

/*El objetivo de que el arreglo 'tasks' se traiga al componente <App> es para que sus elementos hijos como <TaskList>, <TaskForm> tenga acceso a él de manera rápida.  */

function App() {
  /*Para que los componentes <TaskForm> y <TaskList> tengan acceso al arreglo del archivo 'tasks.js', lo traeremos al componente <App> el cual contiene ambos componentes que necesitan acceder al arreglo 'tasks'*/
  /*Luego de que el estado 'tasks' tenga como contenido el arreglo del archivo 'tasks.js' (mediante setTasks), lo pasaremos desde el componente <App> al componente <TaskList> mediante las props.*/

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10" >
      <TaskForm/> {/*<TaskForm createTask={createTask}/> */}
      <TaskList/> {/*Como las funciones y el arreglo estan en el Contexto, no es necesario que <TaskList> los pase en forma de 'props' */}{/* <TaskList tasks={tasks} deleteTask={deleteTask} /> Le pasaremos una propiedad llamada 'tasks', y su valor será el arreglo de tareas 'tasks' */ /*Al mismo tiempo le pasamos al componente <TaskList> mediante las 'props' la funcion 'deleteTask' */}
      </div>
    </main>
  )
}

export default App
