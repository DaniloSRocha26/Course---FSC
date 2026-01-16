import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  // State (Estado)
  //message virou a nova variável no lugar do let message, setMessage é a variável que vai
  // receber o novo valor

  //let message = "Olá Mundo!";
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matemática",
      description:
        "Estudar Matemática para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
  ]);

  //Função para atualizar o estado da tarefa : Completo / Não completo
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  //Função para deletar Tasks ao clicar no botão da lixeira
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  //Função para adicionar Tasks
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 2,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500] space-y-4">
        {" "}
        <h1 className=" text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
