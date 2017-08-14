import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipes';

  onNavigate(goToFeature: string) {
    this.loadedFeature = goToFeature;
  }
}
