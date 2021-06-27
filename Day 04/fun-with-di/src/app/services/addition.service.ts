import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable()
export class AdditionService {
    id: number = 0;

    constructor(
        private historyService: HistoryService
    ) {
        this.id = Math.round(Math.random() * 1000000);
        console.log('Addition Service Created with id: ', this.id);
    }

    add(num1: number, num2: number): number {
        this.historyService.record(`Adding ${num1} and ${num2}`);
        return num1 + num2;
    }
}