export interface AppContextProps{
    /**
     * @param location - The current path of the application
     */
    location: string,
    children: React.ReactNode,
}