import { WorkflowUnitProps } from "./WorkflowUnitProps";
import React from "react";
import "./WorkflowUnitStyles.scss";

const WorkflowUnit: React.FC<WorkflowUnitProps> = (props: WorkflowUnitProps) => {

    let icon = React.createElement(props.workflow.icon);
    
    return (
        <div className="workflow-unit">
            <button>
                <div className="workflow-unit-icon" style={{color: props.workflow.color}}>
                    {icon}
                </div>
                <div className="workflow-unit-name">
                    <h3 >{props.workflow.name}</h3>
                </div>
            </button>
        </div>
    )
}

export default WorkflowUnit;