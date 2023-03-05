import { Header } from "antd/es/layout/layout";
import { WorkflowUnitProps } from "./WorkflowUnitProps";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React from "react";

const WorkflowUnit: React.FC<WorkflowUnitProps> = (props: WorkflowUnitProps) => {

    
    return (
        <div className="workflow-unit-name">
           
            <div className="workflow-unit-icon">
            {React.createElement(props.workflow.icon, <Header>{props.workflow.name}</Header>) }
            </div>
        </div>
    )
}

export default WorkflowUnit;