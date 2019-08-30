import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed: boolean;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        private translate: TranslateService,
        private communicatorService: CommunicatorService
    ) { }

    ngOnInit() {
        this.communicatorService.currentState.subscribe(state => this.collapsed = state);
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.communicatorService.changeState(this.collapsed);
        this.collapsedEvent.emit(this.collapsed);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
