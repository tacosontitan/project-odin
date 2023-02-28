/**
 * Represents a menu item in the left menu.
 */
export class MenuItem
{
    /**
     * The title of the menu item.
     * @type {string}
     */
    title: string;
    /**
     * The icon URL of the menu item.
     * @type {string}
     */
    iconUrl: string;
    /**
     * The route to navigate to when the menu item is clicked.
     * @type {string}
     */
    route: string;
    /**
     * The sub menu items.
     * @type {MenuItem[]}
     */
    subMenu: MenuItem[];
    /**
     * Creates a new instance of the MenuItem class.
     * @param {string} title The title of the menu item.
     * @param {string} iconUrl The icon URL of the menu item.
     * @param {string} route The route to navigate to when the menu item is clicked.
     * @param {MenuItem[]} subMenu The sub menu items.
     */
    constructor(title: string, iconUrl: string, route: string, subMenu: MenuItem[])
    {
        this.title = title;
        this.iconUrl = iconUrl;
        this.route = route;
        this.subMenu = subMenu;
    }
}