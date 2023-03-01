import * as React from 'react'
import LeftNav from '../left-nav/LeftNav';
import './DashboardLayout.scss'
import { DashboardLayoutProps } from './DashboardLayoutProps';

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = (props: DashboardLayoutProps) => {
    return <>
        <div className="dashboard">
            <LeftNav />
            <div className="dashboard-content">
                {props.children}
            </div>
        </div>
    </>
}


export default DashboardLayout;