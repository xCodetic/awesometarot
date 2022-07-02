import * as ShortID from "shortid";

import { JSONFile, Low } from "lowdb";

import { ITarotCard } from "./interfaces";

export interface TDatabaseSchema {
    tarotCards: ITarotCard[];
}

class DbService {
    private databasePath: string = "./database.json";

    private database: Low<TDatabaseSchema>;

    constructor() {
        const adapter: JSONFile<TDatabaseSchema> = new JSONFile(this.databasePath);
        this.database = new Low(adapter);
        this.database.data ||= { tarotCards: [] };
        if (this.database.data.tarotCards.length === 0) {
            const defaultTarotCardId = ShortID.generate();
            const defaultTarotCard = {
                id: defaultTarotCardId,
                name: `Tarot card ${defaultTarotCardId}`
            }
            this.database
                .data
                .tarotCards
                .push(defaultTarotCard);
            this.database.write();
        }
    }
}

export const dbService = new DbService();