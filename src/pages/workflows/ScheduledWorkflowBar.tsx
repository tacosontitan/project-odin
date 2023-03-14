import { ScheduledWorkflow } from "./ScheduledWorkflow";
import { Workflow } from "./models/Workflow";
import * as icons from '@ant-design/icons/lib/icons';
import "./WorkflowComponentStyles.scss"
import "./ScheduledWorkflowStyles.scss"

export const ScheduledWorkflowBar: React.FC = () => {

    return(
        <div className="scheduled-workflow-bar workflow-component">
             <ScheduledWorkflow id='0' time='Tomorrow at 8pm' workflow={new Workflow("Workflow Name",
             "A very good description", "green", icons.CheckCircleOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Today at 11am' workflow={new Workflow("Workflow Name",
             "A very good description", "red", icons.ContainerOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Tomorrow at 8pm' workflow={new Workflow("Workflow Name",
             "A very good description", "green", icons.CheckCircleOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Today at 11am' workflow={new Workflow("Workflow Name",
             "A very good description", "red", icons.ContainerOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Tomorrow at 8pm' workflow={new Workflow("Workflow Name",
             "A very good description", "green", icons.CheckCircleOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Today at 11am' workflow={new Workflow("Workflow Name",
             "A very good description", "red", icons.ContainerOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Tomorrow at 8pm' workflow={new Workflow("Workflow Name",
             "A very good description", "green", icons.CheckCircleOutlined)}></ScheduledWorkflow>
             <ScheduledWorkflow id='0' time='Today at 11am' workflow={new Workflow("Workflow Name",
             "A very good description", "red", icons.ContainerOutlined)}></ScheduledWorkflow>
        </div>
    );

}