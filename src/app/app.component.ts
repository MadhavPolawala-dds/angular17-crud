import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular17-crud';
  openStudentModel() {
    const myModel = document.getElementById('createStudentModel');
    if (myModel != null) {
      myModel.style.display = 'block';
    }
  }

  closeModel() {
    const myModel = document.getElementById('createStudentModel');
    if (myModel != null) {
      myModel.style.display = 'none';
    }
  }
}
