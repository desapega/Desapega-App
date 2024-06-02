import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    DividerModule
  ]
})
export class PrimeModuleModule { }
