import { ScheduledWorkflowProps } from "./ScheduledWorkflowProps"
import "./WorkflowComponentStyles.scss"
import "./ScheduledWorkflowStyles.scss"
import React from "react"

export const ScheduledWorkflow: React.FC<ScheduledWorkflowProps> = (props: ScheduledWorkflowProps) => {

    const color = props.workflow.color;
    const icon = React.createElement(props.workflow.icon);
    const time = props.time;
    const iconAndNameDiv = <div className={"scheduled-workflow-icon-and-name "+color}>
        <span >{icon} {props.workflow.name}</span>
        </div>;
    const timeDiv = <div className="scheduled-workflow-component-time"><span className="time-span">{time}</span></div>;

    return (
        <div className="workflow-component scheduled-workflow">
            <button>
                {iconAndNameDiv}
                {timeDiv}
            </button>
        </div>
    );

}