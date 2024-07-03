import PlusIcon from "./Icons/PlusIcon";
import Button from "./UI/Button";


export default function Sidebar({handleAddProject}) {

  // function handleAddProject(){
  //   console.log("add a new project")

  // }

  return (
   <aside className="w-80 bg-black text-white p-4">
      <div className="mb-8">
        <span className="mr-2 font-bold text-primary hover:text-primary-hover">{'{}'}</span>
        lorem<strong className="font-bold">Ipsum</strong>
      </div>
      <h1 className="font-bold uppercase">Projects</h1>
      <Button onClick={handleAddProject}>
        <PlusIcon className="size-4" />
        add Project
      </Button>
   </aside>
  )
}
