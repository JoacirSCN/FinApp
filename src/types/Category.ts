export interface Category {
  /* tag: string -> é para dizer que category aceita qualquer tag|nome que seja uma string e que dentro dela contenha um obj com determinada estrutura */
  [tag: string]: {
    title: string
    color: string
    expense: boolean
  }
}
