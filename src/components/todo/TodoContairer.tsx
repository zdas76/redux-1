
import AddTodoModal from "./AddTodoModal";
import TodoCards from "./TodoCards";
import TodoFilter from "./TodoFilter";



const TodoContainer = () => {
    return (
        <div className="p-4">
                <div className="mb-5 space-x-4 flex justify-between p-[5px] ">
                    
                    <AddTodoModal />
                    <TodoFilter />
                </div>
                <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
                    <div className="bg-white p-5 w-full h-full grouded-lg space-y-3">
                    <TodoCards />
                    <TodoCards />
                    <TodoCards />
                    </div>
                    <div className="bg-white text-2xl font-bold p-4 flex justify-center items-center">
                        <p>There is no task pending</p>
                    </div>
                </div>
        </div>
    );
};

export default TodoContainer;