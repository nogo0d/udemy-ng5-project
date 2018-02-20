import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe(
            'Francesinha',
            'The most "TRIPEIRO" dish.',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLC1iPp5Uv1a0zTpl82IsntGubr8LjUwlGloCirAjNDO771oZrw'
        ),
        new Recipe(
            'Francesinha',
            'The most "TRIPEIRO" dish.',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLC1iPp5Uv1a0zTpl82IsntGubr8LjUwlGloCirAjNDO771oZrw'
        ),
        new Recipe(
            'Francesinha',
            'The most "TRIPEIRO" dish.',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLC1iPp5Uv1a0zTpl82IsntGubr8LjUwlGloCirAjNDO771oZrw'
        ),
        new Recipe(
            'Francesinha',
            'The most "TRIPEIRO" dish.',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLC1iPp5Uv1a0zTpl82IsntGubr8LjUwlGloCirAjNDO771oZrw'
        )
    ];

    constructor() { }

    ngOnInit() {
    }

}
