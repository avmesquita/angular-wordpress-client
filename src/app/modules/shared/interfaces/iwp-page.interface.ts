import { wpCommentStatus } from "../enums/wp-comment-status.enum";
import { wpPingStatus } from "../enums/wp-ping-status.enum";
import { wpStatus } from "../enums/wp-status.enum";
import { IWpExcerpt } from "./iwp-excerpt.interface";
import { IWpRendered } from "./iwp-rendered.interface";

export interface IWpPage {
    /* READ ONLY */
    id: number;
    guid: IWpRendered;
    link: string;
    modified: string;
    modified_gmt: string;
    type: string;
    permalink_template: string;
    generated_slug: string;

    /* READ WRITE */
    parent: number;
    date: string;
    date_gmt: string;
    slug: string;
    status: wpStatus;
    password: string;
    title: IWpRendered;
    content: IWpRendered;
    author: number;
    excerpt: IWpExcerpt;
    featured_media: number;
    comment_status: wpCommentStatus;
    ping_status: wpPingStatus;    
    meta: any;
    sticky: boolean;
    template: string;
    menu_order: number;
}