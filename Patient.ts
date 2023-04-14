export class Patient {
    name: string;
    code: number

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code
    }

    getName(): string {
        return this.name
    }

    getCode(): number {
        return this.code
    }
}
