export interface InfoEpisode {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface ResultEpisode{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface Episode {
    info: InfoEpisode;
    results: ResultEpisode[];
}


