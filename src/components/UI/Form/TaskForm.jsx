import { useState } from "react";
import Button from "../Button";

export default function TaskForm({setProjects,activeProject}) {

    const [task,setTask] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(task.trim() === "" ){
            alert("task is empty");
            return;
          }
        
        setProjects(prev =>{
            // find the index of the active project 
          
            const projectIndex = prev.findIndex(project => project.id === activeProject.id);
      
            // non mutare prev direttamente, ritornare un nuovo valore per setProjects
            const newProjects = [...prev];
            const newProjectTask = [...prev[projectIndex].tasks];
      
            // shallow copy of tasks
            // add task at the active project using the above projectIndex
            // newProjects[projectIndex].tasks.push({
            //   id: Date.now(),
            //   name: task,
            //   completed: false
            // });
            newProjects[projectIndex].tasks = [
              ...newProjectTask, 
              {
                id: Date.now(),
                name: task,
                completed: false,
              }
            ];
      
           
            return newProjects;

            
      
      
          });

          setTask("");
      
    }
  return (
    <>
        <h2 className="font-bold pb-4">Tasks</h2>
        <form onSubmit={handleSubmit} className="flex gap-6 ">
            <input className=" w-full border-b-2 border-black/20 outline-none focus:border-black/75 transition-colors hover:border-black/75 focus:bg-black/5 pl-2 p-b-4 placeholder:text-slate-800 " placeholder="add task" type="text" onChange={(e) => setTask(e.target.value)}
            value={task} />
        <Button>Add</Button>
        </form>
    </>
    
  )
}
