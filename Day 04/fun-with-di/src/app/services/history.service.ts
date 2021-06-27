import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    private records: string[] = [];

    record(data: string): void {
        this.records.push(data);
        console.log(this.records);
    }
}