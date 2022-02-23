import { wpTaxonomy } from "../enums/wp-taxonomy.enum";

export interface IWpTag {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: wpTaxonomy;
    meta: {};
}