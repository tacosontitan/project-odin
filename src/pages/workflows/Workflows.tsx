import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Workflow } from './models/Workflow';
import WorkflowUnit from './WorkflowUnit';
import UpCircleOutlined from '@ant-design/icons/lib/icons/UpCircleOutlined';

function Workflows() {
    return (
        <DashboardLayout>
            <span>Let's automate things!</span>
            <WorkflowUnit workflow={new Workflow("A name for a workflow",
             "A very good description", "floralwhite", UpCircleOutlined)}></WorkflowUnit>
        </DashboardLayout>
    );
}

export default Workflows;