import { Header } from "antd/es/layout/layout";
import { WorkflowUnitProps } from "./WorkflowUnitProps";


const WorkflowUnit: React.FC<WorkflowUnitProps> = (props: WorkflowUnitProps) => {

    return (
        <div className="workflow-unit">
            <Header>{props.workflow.name}</Header>
            <div className={props.workflow.icon}></div>
        </div>
    )
}

export default WorkflowUnit;