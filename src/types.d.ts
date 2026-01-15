export interface IPage {
    title: string;
    content: string;
}

export interface IPageAPI {
    [key: string]: IPage;
}