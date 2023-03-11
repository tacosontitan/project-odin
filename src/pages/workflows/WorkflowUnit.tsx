import { WorkflowUnitProps } from "./WorkflowUnitProps";
import React from "react";
import './WorkflowComponentStyles.scss';
import "./WorkflowUnitStyles.scss";

const WorkflowUnit: React.FC<WorkflowUnitProps> = (props: WorkflowUnitProps) => {

    let icon = React.createElement(props.workflow.icon);
    
    return (
        <div className="workflow-component">
            <button>
                <div className={"workflow-component-icon "+props.workflow.color} >
                    {icon}
                </div>
                <div className="workflow-component-name">
                    <span>{props.workflow.name}</span>
                </div>
            </button>
        </div>
    )
}

export default WorkflowUnit;