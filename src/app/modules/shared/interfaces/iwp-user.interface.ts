export interface IWpUser {
    id: number;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    url: string;
    description: string;
    link: string;
    locale: string;
    nickname: string;
    slug: string;
    registered_date: string;
    roles: string[];
    password: string;
    capabilities: {};
    extra_capabilities: {};
    avatar_urls: {};
    meta: {};
}