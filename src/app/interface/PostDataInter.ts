export interface Pokedex {
    code: number;
    data: Datum[];
}

export interface Datum {
    id:      number;
    title:   string;
    content: string;
}
