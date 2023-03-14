import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Workflow } from './models/Workflow';
import WorkflowUnit from './WorkflowUnit';
import { WorkflowCommandBar } from './WorkflowCommandBar';
import * as icons from '@ant-design/icons/lib/icons';
import { ScheduledWorkflowBar } from './ScheduledWorkflowBar';

function Workflows() {
    return (
        <DashboardLayout>
            <span>Let's automate things!</span>
            <div style={{overflow: "auto", display: 'flex', flexFlow: 'column', flex: "auto"}}>
                <div>
                    <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "indigo", icons.DashboardOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "lightcyan", icons.CloudDownloadOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "chocolate", icons.CloudServerOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "seagreen", icons.AmazonOutlined)}></WorkflowUnit>
                    <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "indigo", icons.DashboardOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "lightcyan", icons.CloudDownloadOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "chocolate", icons.CloudServerOutlined)}></WorkflowUnit>
                     <WorkflowUnit workflow={new Workflow("Workflow Name",
                     "A very good description", "seagreen", icons.AmazonOutlined)}></WorkflowUnit>
                </div>
                <div style={{marginTop: "auto"}}>
                    <WorkflowCommandBar></WorkflowCommandBar>
                    <ScheduledWorkflowBar></ScheduledWorkflowBar>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Workflows;