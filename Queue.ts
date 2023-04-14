import {Patient} from "./Patient";

export class Queue {
    listPatient: Patient[] = []
    size: number

    constructor() {
        this.size = 0
    }

    enqueue(element: Patient) {
        this.size++
        return this.listPatient.push(element)
    }

    dequeue() {
        this.size--
        return this.listPatient.shift()
    }

    sortPatientByCode() {
        this.listPatient.sort((a: Patient, b: Patient) => {
            return a.getCode() - b.getCode()
        })
    }
    nextPatient(){
        return ` Xin moi ${this.listPatient[0].getName()} vao kham`
    }
    waitPatient(){
        return ` ${this.dequeue().getName()} chuan bi vao kham`
    }
}
