export interface InfoCharacter {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface Origen {
    name: String;
    url: String;
}

export interface Localizacion{
    name: string;
    url: string;
}
export interface ResultCharacter{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origen;
    location: Localizacion;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Character {
    info: InfoCharacter;
    results: ResultCharacter[];
}


