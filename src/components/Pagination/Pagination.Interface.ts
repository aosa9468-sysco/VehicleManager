export interface PaginateProps {
    totPages: number;
    currentPage: number;
    pageClicked(currentPage: number): void;
    children?: React.ReactNode;
}