export interface Transaction {
    id?: string,
    fromId: string,
    toId: string,
    AgentId: string,
    amount: number,
    date: Date
}
