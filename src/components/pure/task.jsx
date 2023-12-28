import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{task.level}</span>
            </td>
            <td className='align-middle'></td>
            {/* TODO: Sustituir por Iconos */}
            <span>{task.completed}</span>
        </tr>

        // <div>
        //     <h2 className='task-name'>Nombre: {task.name}</h2>
        //     <h3>Descripción: {task.description}</h3>
        //     <h4>Level: {task.level}</h4>
        //     <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)          /* instanceOf es para pasarle una tarea */
};


export default TaskComponent;
