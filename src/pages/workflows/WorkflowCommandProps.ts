export interface WorkflowCommandProps{
    /**
     * @param command The command to execute. Takes in a value from the Command enum.
    */
    command: Command,
}

export enum Command{
    Create = "Create",
    Schedule = "Schedule",
}