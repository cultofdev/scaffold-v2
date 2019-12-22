import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LayoutModule } from './layout/layout.module';
import { AddComponent } from './layout/add/add.component';
import { Person } from './shared/model/person';
import { User } from './shared/model/user';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        LayoutModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthGuard,
        Person,
        User
    ],
    entryComponents: [
        AddComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
