export type AuthorType = {
  id: number
  firstName: string
  familyName: string
  birthDate: Date
  deathDate: Date
  lifeSpan: string
}

export function getBookCopyStatuses() {
  return [
    "NotAvailable", // 0
    "OnOrder",      // 1
    "InTransit",    // 2
    "OnHold",       // 3
    "OnLoan",       // 4
    "InLibrary"     // 5
  ]
}
