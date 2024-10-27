
export class WebError extends Error {
    constructor ({status, message}) {
        super(message)
        this.status = status
    }
}
