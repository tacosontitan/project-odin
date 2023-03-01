export class LeftNavLink {
    constructor(
        public name: string,
        public url: string,
        public iconUrl: string,
        public children?: LeftNavLink[]
    ) { }
}