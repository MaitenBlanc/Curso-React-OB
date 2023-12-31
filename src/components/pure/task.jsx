import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { Levels } from '../../models/levels.enums';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Function that returnos a Badge depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case Levels.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
            case Levels.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)
            case Levels.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action'
                style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action'
                style={{ color: 'grey' }}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{ color: 'tomato' }} onClick={() => remove(task)}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),          /* instanceOf es para pasarle una tarea */
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
