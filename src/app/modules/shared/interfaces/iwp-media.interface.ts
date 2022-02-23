import { wpCommentStatus } from "../enums/wp-comment-status.enum";
import { wpPingStatus } from "../enums/wp-ping-status.enum";

export interface IWpMedia {
    date: string;
    date_gmt: string;
    guid: {},
    id: number;
    link: string;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    permalink_template: string;
    generated_slug: string;
    title: {},
    author: number;
    comment_status: wpCommentStatus;
    ping_status: wpPingStatus;
    meta: {};
    template: string;
    alt_text: string;
    caption: string;
    description: string;
    media_type: string;
    mime_type: string;
    media_details: {};
    post: number;
    source_url: string;
    missing_image_sizes: {};
}