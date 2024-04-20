import { Component } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: `
        <div class="loading-spinner">
            <mat-spinner diameter="50"></mat-spinner>
        </div>
    `,
    styles: [
        `
            .loading-spinner {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        `,
    ],
})
export class LoadingSpinnerComponent {}
