type URL_Name = {
    name: string;
    url: string;
};

export type Abilities = {
    ability: URL_Name;
    is_hidden: boolean;
    slot: number;
};

export type Forms = {
    name: string;
    url: string;
};

export type GameIndices = {
    game_index: number;
    version: URL_Name;
};

export type VersionGroupDetails = {
    level_learned_at: number;
    move_learn_method: URL_Name;
    version_group: URL_Name;
};

export type Moves = {
    move: URL_Name;
    version_group_details: VersionGroupDetails[];
};

export type Species = {
    name: string;
    url: string;
};

export type DreamWorld = {
    front_default: string | null;
    front_female: string | null;
};

export type HomeSprite = {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
};

export type OfficialArtwork = {
    front_default: string | null;
};

export type Sprites = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: DreamWorld;
        home: HomeSprite;
        'official-artwork': OfficialArtwork;
        versions: any;
    };
};

export type Stats = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};

export type Types = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export type PokemonType = {
    abilites: Abilities[];
    base_experience: number;
    forms: Forms[];
    game_indices: GameIndices[];
    height: number;
    help_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    weight: number;
};
//
// export type Pokemon = {
//     pokemon: PokemonType;
// };

export type PokemonsState = {
    pokemons: PokemonType[];
    slots: number;
    xp: number;
};
