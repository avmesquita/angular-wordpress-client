import { wpTaxonomy } from "../enums/wp-taxonomy.enum";
import { IWpRendered } from "./iwp-rendered.interface";

export interface IWpTag {
    id: number;
    count: number;
    description: IWpRendered;
    link: string;
    name: IWpRendered;
    slug: string;
    taxonomy: wpTaxonomy;
    meta: {};
}