export class WorkflowDataModel {
    /**
    @param id The id of the workflow, a 36 character long v4 UUID.
    @param name The name of the workflow.
    @param description The description of the workflow.
    @param color The color of the workflow. Is a string representing a SCSS class.
    @param icon The icon of the workflow. Is an Ant Design icon name.
    **/
    public id: string;
    constructor(
        public name: string,
        public description: string,
        public color: string,
        public icon: React.FC,
    ){
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.color = "color-"+color;
        this.icon = icon;
    }

}