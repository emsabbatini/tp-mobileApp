import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

    getPositionName(id): string {
        let position = "";
        switch(id) {
            case 1: position = "Arquero"; break;
            case 2: position = "Defensor"; break;
            case 3: position = "Volante"; break;
            case 4: position = "Delantero"; break;
            default: position = "Desconocido"; break;
        }
        return position;
    }
} 