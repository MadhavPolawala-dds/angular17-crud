import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular17-crud';

  studentObj: Student = new Student();
  studentList: Student[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angular17-crud');
    if (localData != null) {
      this.studentList = JSON.parse(localData);
    }
  }

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

  addStudent() {
    const myModel = document.getElementById('createStudentModel');
    if (myModel != null) {
      myModel.style.display = 'none';
    }
    const isLocalStorage = localStorage.getItem('angular17-crud');
    if (isLocalStorage != null) {
      const oldArr = JSON.parse(isLocalStorage);
      oldArr.push(this.studentObj);
      localStorage.setItem('angular17-crud', JSON.stringify(oldArr));
    } else {
      const newArr = [];
      newArr.push(this.studentObj);
      localStorage.setItem('angular17-crud', JSON.stringify(newArr));
    }
  }
}

export class Student {
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  address: string;
  pincode: string;

  constructor() {
    this.name = '';
    this.mobileNo = '';
    this.email = '';
    this.city = '';
    this.address = '';
    this.pincode = '';
  }
}
