import Image from "../assets/noProject.svg"
import PlusIcon from "./Icons/PlusIcon"
import Button from "./UI/Button"
export default function NoProject({handleAddProject}) {
  return (
    <section className=" flex flex-col items-center justify-center flex-grow">
      <img className="w-72" src={Image} alt="noProject" />
      <h1 className="my-4 font-bold text-black text-xl">No project selected.</h1>
      <p className="text-black">select a project from a sidebar or create a new one.</p>
      <Button onClick={handleAddProject} className="mt-4"> <PlusIcon className="size-5"></PlusIcon>new Project</Button>
    </section>
  )
}
