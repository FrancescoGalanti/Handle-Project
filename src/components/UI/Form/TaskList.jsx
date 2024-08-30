import CloseIcon from "../../Icons/CloseIcon";

export default function TaskList({activeProject,setProjects}) {

    function removeTask(taskId){
       
     
    
       setProjects(prev => {
    
        
        const newProjects = [...prev];
    
        const projectIndex = prev.findIndex(project => project.id === activeProject.id);
        const newProjectTask = [...prev[projectIndex].tasks].filter(task => task.id != taskId);
    
        console.log(newProjectTask)
        
        newProjects[projectIndex].tasks = [...newProjectTask]
        
    
        
        return newProjects
        
        
         
     
     
        
       })
    
       
    
    
      }
  return (
   <>
    {
        activeProject.tasks.length > 0 ? ( <ul>
          {activeProject.tasks.map(task => (
            <li className=" flex items-center justify-between p-6 border-b border-primary/40" key={task.id}>{task.name} <CloseIcon onClick={() => removeTask(task.id)} className="cursor-pointer size-4"></CloseIcon></li>
          ))}
        </ul>) 
        : 
        ( <div>
          <p>no task</p>
        </div>
        )
      }
   
   </>
      
   
  )
}
