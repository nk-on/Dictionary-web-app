export interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    origin?: string;
    sourceUrls: string
    meanings: Meaning[];
}

export interface Phonetic {
    text?: string;
    audio: string;
    sourceUrl?: string;
    license?: {
        name: string;
        url: string;
    };
}

export interface Meaning {
    partOfSpeech: string;
    synonyms: string[];
    definitions: Definition[];
}

export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}
export interface ErrorResponse {
    title: string;
    message: string;
    resolution: string;
}