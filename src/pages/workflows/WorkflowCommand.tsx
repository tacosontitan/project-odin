import { WorkflowCommandProps, Command } from './WorkflowCommandProps';
import { HistoryOutlined, SyncOutlined, PlusCircleOutlined} from '@ant-design/icons';
import React from 'react';
import './WorkflowComponentStyles.scss'
import './WorkflowCommandStyles.scss';

export const WorkflowCommand: React.FC<WorkflowCommandProps> = (props: WorkflowCommandProps) => {

    let commandColor = "color-black";
    let icon, iconDiv, nameDiv: JSX.Element;
    switch (props.command) {
        case Command.Create:
            icon = React.createElement(PlusCircleOutlined);
            iconDiv = <div className={"workflow-component-icon "+commandColor}>{icon}</div>
            nameDiv = <div className="workflow-component-name"><span >{"Create A Workflow"}</span></div>;
            break;
        case Command.Schedule:
            icon = React.createElement(HistoryOutlined);
            iconDiv = <div className={"workflow-component-icon "+commandColor}>{icon}</div>
            nameDiv = <div className="workflow-component-name"><span >{"Schedule Workflows"}</span></div>;
            break;
        default:
            icon = React.createElement(SyncOutlined);
            iconDiv = <div className={"workflow-component-icon "+commandColor}>{icon}</div>
            nameDiv = <div className="workflow-component-name"><span >{"Default Text"}</span></div>;
            break;
    }
    return (
        <div className="workflow-component workflow-command-component">
        <button>
            {iconDiv}
            {nameDiv}
        </button>
    </div>
    )

}