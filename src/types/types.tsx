interface State {
    data: object | null;
    error: boolean;
    loaded: boolean;
}

interface AsideItemI {
    icon: string;
    title: string;
    link?: string;
}

export type {State, AsideItemI};