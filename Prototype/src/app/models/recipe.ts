export class Recipe {
    id: number;
    name: string;
    mainImageUrl: string;
    fullTime: number;
    recipe: {
        properties: {
            language: string;
            portions: number;
        };
        ingredientsArr: {
            id: number;
            name: string;
            amount: number;
            unit: string;
            groupName: string;
        }[];
        toolsArr: {
            [id: string]: {
                name: string;
                amount: number;
            };
        };
        actionsArr: {
            [id: string]: {
                name: string;
                actionKey: string;
                imageUrl: string;
                stepType: number;
            };
        };
        textsArr: string[];
        actions: any[];
        // actions: {
        //     index: number;
        //     action: number;
        //      frame: number[];
        //     text: number; 
        //      timerValue: number;
        //     nextStep: number[];
        //     passiveMaster: string;
        //     firstParallel: string;
        //     lastParallel: string;
        //     sequenceParallel: string[];
        //     constraints: string[];
        //      smartOutput: {
        //         toolId: number;
        //         tool: string;
        //         action: string;
        //         temperature: string;
        //         duration: number;
        //         ingredients: {
        //             id: number;
        //             amount: number;
        //         }[];
        //         cutSize: string;
        //     };
        //}[];
        groupsArr: {
            id: number;
            title: string;
            imgUrl: string;
            defaultPortions: number;
            portionType: number;
            portionPartAmount: string;
            portionPieceName: string;
            portionPieceMax: string;
            portionPieceMin: string;
            portionSideName: any;
        }[];
        fullTime: number;
    };
  }