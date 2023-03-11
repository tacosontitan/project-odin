import { Workflow } from "../models/Workflow";
import * as icons from '@ant-design/icons/lib/icons';
/**
 * Represents a service for managing workflows.
 */
export class WorkflowService {
    /**
     * Gets all workflows.
     * @param userId The id of the user to filter the workflows by.
     * @returns An array of workflows.
     */
    public get(userId: string | null = null): Workflow[] {
        return this.getDummyData();
    }
    private getDummyData(): Workflow[] {
        let workflows: Workflow[] = [];
        for (let i = 0; i < 100; i++) {
            workflows.push(
                new Workflow(
                    `Workflow ${i}`,
                    `This is an awesome description for workflow ${i}`,
                    this.getRandomColor(),
                    this.getRandomIcon()
                )
            );
        }

        return workflows;
    }
    private getRandomColor(): string {
        let colors = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan"
        ];

        let randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    private getRandomIcon(): React.FC {
        let iconList = [
            icons.AccountBookOutlined,
            icons.AlertOutlined,
            icons.AliwangwangOutlined,
            icons.AmazonOutlined,
            icons.AntCloudOutlined,
            icons.AntDesignOutlined,
            icons.ApiOutlined,
            icons.AppstoreAddOutlined,
            icons.AppstoreOutlined,
            icons.AudioOutlined,
            icons.AuditOutlined,
            icons.BackwardOutlined,
            icons.BankOutlined,
            icons.BarChartOutlined,
            icons.BarcodeOutlined,
            icons.BarsOutlined,
            icons.BehanceSquareOutlined,
            icons.BehanceOutlined,
            icons.BellOutlined,
            icons.BookOutlined,
            icons.BoxPlotOutlined,
            icons.BugOutlined,
            icons.BuildOutlined,
            icons.BulbOutlined,
            icons.CalculatorOutlined,
            icons.CalendarOutlined,
            icons.CameraOutlined,
            icons.CarOutlined,
            icons.CaretDownOutlined,
            icons.CaretLeftOutlined,
            icons.CaretRightOutlined,
            icons.CaretUpOutlined,
            icons.CarryOutOutlined,
            icons.CheckCircleOutlined,
            icons.CheckSquareOutlined,
            icons.ChromeOutlined,
            icons.ClockCircleOutlined,
            icons.CloseCircleOutlined,
            icons.CloseSquareOutlined,
            icons.CloudDownloadOutlined,
            icons.CloudOutlined,
            icons.CloudServerOutlined,
            icons.CloudSyncOutlined,
            icons.CloudUploadOutlined,
            icons.ClusterOutlined,
            icons.CodeOutlined,
            icons.CodepenCircleOutlined,
            icons.CodepenOutlined,
            icons.CoffeeOutlined,
            icons.ColumnHeightOutlined,
            icons.ColumnWidthOutlined,
            icons.CommentOutlined,
            icons.CompassOutlined,
            icons.CompressOutlined,
            icons.ConsoleSqlOutlined,
            icons.ContactsOutlined,
            icons.ContainerOutlined,
            icons.ControlOutlined,
            icons.CopyOutlined,
            icons.CreditCardOutlined,
            icons.CrownOutlined,
            icons.CustomerServiceOutlined,
            icons.DashboardOutlined,
            icons.DatabaseOutlined,
            icons.DeleteColumnOutlined,
            icons.DeleteRowOutlined,
            icons.DeleteOutlined,
            icons.DeploymentUnitOutlined,
            icons.DesktopOutlined,
            icons.DingdingOutlined,
            icons.DislikeOutlined,
            icons.DollarCircleOutlined,
            icons.DollarOutlined,
            icons.DotChartOutlined,
            icons.DoubleLeftOutlined,
            icons.DoubleRightOutlined,
            icons.DownCircleOutlined
        ];

        let randomIndex = Math.floor(Math.random() * iconList.length);
        return iconList[randomIndex];
    }
}