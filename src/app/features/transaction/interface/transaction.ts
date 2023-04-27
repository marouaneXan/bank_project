export interface Transaction {
    id?: string,
    sourceAccount: string,
    destinationAccount: string,
    AgentId: string,
    amount: number,
    dateCreated?: Date
}
