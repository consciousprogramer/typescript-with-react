class todo {
    id: string | number
    text: string

    constructor(todoTitle: string) {
        this.text = todoTitle
        this.id = Math.floor(Math.random() * 1000)
    }
}

export default todo