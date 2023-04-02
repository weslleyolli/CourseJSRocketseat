function showTicket(user: string | null, ticket: number){
    console.log(`Hello ${user ?? "User standard"}. Your ticket is ${ticket}`);
}

showTicket("Weslley", 123)