import { IWpRendered } from "./iwp-rendered.interface";

export interface IWpComment {
    id: number;
    author: string;
    author_email: string;
    author_ip: string;
    author_name: string;
    author_url: string;
    author_user_agent: string;
    content: IWpRendered;
    date: string;
    date_gmt: string;
    link: string;
    parent: number;
    post: number;
    status: string;
    type: string;
    author_avatar_urls: {};
    meta: {};
}