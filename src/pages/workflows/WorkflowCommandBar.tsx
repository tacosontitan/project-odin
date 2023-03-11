import { WorkflowCommand } from './WorkflowCommand';
import { Command } from './WorkflowCommandProps';
import './WorkflowCommandStyles.scss'

export const WorkflowCommandBar: React.FC = () => {

    return(
        <div className='workflow-command-bar'>
            <WorkflowCommand command={Command.Create}></WorkflowCommand>
             <WorkflowCommand command={Command.Schedule}></WorkflowCommand>
        </div>
    );

}