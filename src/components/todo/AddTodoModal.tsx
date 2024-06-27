import {
  Dialog,
  DialogContent,
  DialogDescription,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FormEvent, useState } from "react"
import { DialogClose } from "@radix-ui/react-dialog"
import { useAppDispatch } from "@/redux/hook"
import { addTodo } from "@/redux/features/todoSlice"

export default function AddTodoModal() {

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (e:FormEvent) => {
    e.preventDefault();
    const taskData = {
      title: task,
      description: description
    }
    dispatch(addTodo(taskData));

  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-500 to-blue-500  text-xl font-semibold">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right" >
              Task
            </Label>
            <Input
              id="task"
              className="col-span-3"
              onBlur={(e)=>setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              onBlur={(e)=>setTask(e.target.value)}
            />
          </div>
          
        <DialogClose asChild>
        <div className=" mx-auto"><Button  type="submit">Save changes</Button></div>
        </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  )
}
