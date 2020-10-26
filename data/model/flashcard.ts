export interface Flashcard {
    _id: string;
    languageId: string;
    conversationId?: string;
    verbId?: string;
    vocabularyId?: string;
    seqNo: number;
    category: string;
    confident: boolean;
    dateAdded: string;
}