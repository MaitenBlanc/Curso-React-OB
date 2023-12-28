import React from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enums';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
