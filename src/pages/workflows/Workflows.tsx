import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Workflow } from './models/Workflow';
import WorkflowUnit from './WorkflowUnit';
import * as icons from '@ant-design/icons/lib/icons';

function Workflows() {
    return (
        <DashboardLayout>
            <span>Let's automate things!</span>
            <WorkflowUnit workflow={new Workflow("A name for a workflow",
             "A very good description", "indigo", icons.DashboardOutlined)}></WorkflowUnit>
        </DashboardLayout>
    );
}

export default Workflows;