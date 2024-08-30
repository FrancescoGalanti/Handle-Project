import Bucket from "../../Icons/Bucket";
import Calendar from "../../Icons/Calendar";

export default function HeaderProject({activeProject,setActiveProject,setProjects}) {
  // Derived state
  const formattedDate = new Date(activeProject.dueDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: "numeric",
    month: 'long',
    day: 'numeric'
  });

  function removeProject(){
    

    if (!window.confirm('Do you really want to erase this project?')) {
      return;
    }

    setProjects(prev => prev.filter(project => activeProject.id != project.id ))

    setActiveProject(null)
    
  }

  return (
    
   <>
    <div className="flex justify-between items-center pb-4">
        <h1 className="font-bold 
        ">{activeProject.title}</h1>
        <button onClick={removeProject}><Bucket></Bucket></button>

      </div>
       <time className="flex pb-4 gap-2 items-center"><Calendar></Calendar>{formattedDate}</time>
       <p className="pb-6">{activeProject.description}</p>
   </>
      
  )
}
