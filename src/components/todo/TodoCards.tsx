import { PencilLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";


const TodoCards = () => {
    return (
        <div>
            <div className="bg-white rounded-md p-2 flex justify-between items-center border">
                        <input type="checkbox" name="" id="" />
                        <p className="font-semibold">Todo Title</p>
                        <p>Time</p>
                        <p>description</p>
                        <div className="space-x-4">
                            <Button className="bg-red-500"><Trash2 /></Button>
                            <Button className="bg-[#5C53FE]"><PencilLine /></Button>
                        </div>
                    </div>
        </div>
    );
};

export default TodoCards;