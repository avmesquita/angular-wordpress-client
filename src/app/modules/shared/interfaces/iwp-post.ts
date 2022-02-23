import { wpCommentStatus } from "../enums/wp-comment-status";
import { wpFormat } from "../enums/wp-format";
import { wpPingStatus } from "../enums/wp-ping-status";
import { wpStatus } from "../enums/wp-status";
import { IWpExcerpt } from "./iwp-excerpt";
import { IWpRendered } from "./iwp-rendered";

export interface IWpPost {
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
    format: wpFormat;
    meta: any;
    sticky: boolean;
    template: string;
    categories: number[];
    tags: number[];
}