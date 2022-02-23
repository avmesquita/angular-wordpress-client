export interface IWpPlugin {
    plugin: {};
    status: string;
    name: string;
    plugin_uri: string;
    author: string;
    author_uri: string;
    description: string;
    version: string;
    network_only: boolean;
    requires_wp: string;
    requires_php: string;
    textdomain: string;
}