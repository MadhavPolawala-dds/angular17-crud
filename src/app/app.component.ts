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
    this.studentObj = new Student();
    const myModel = document.getElementById('createStudentModel');
    if (myModel != null) {
      myModel.style.display = 'none';
    }
  }

  onEdit(student: Student) {
    this.studentObj = student;
    this.openStudentModel();
  }
  onDelete(student: Student) {
    // Show confirmation dialog
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (confirmDelete) {
      // If the user confirms, proceed with deletion
      this.studentList = this.studentList.filter((m) => m.id != student.id);
      localStorage.setItem('angular17-crud', JSON.stringify(this.studentList));
    }
  }

  addStudent() {
    const isLocalStorage = localStorage.getItem('angular17-crud');
    if (isLocalStorage != null) {
      const oldArr = JSON.parse(isLocalStorage);
      this.studentObj.id = oldArr.length + 1;
      oldArr.push(this.studentObj);
      this.studentList = oldArr;
      localStorage.setItem('angular17-crud', JSON.stringify(oldArr));
    } else {
      const newArr = [];
      newArr.push(this.studentObj);
      this.studentObj.id = 1;
      this.studentList = newArr;
      localStorage.setItem('angular17-crud', JSON.stringify(newArr));
    }
    this.closeModel();
  }

  updateStudent() {
    const currentRecord = this.studentList.find(
      (m) => (m.id = this.studentObj.id)
    );
    if (currentRecord != undefined) {
      currentRecord.name = this.studentObj.name;
      currentRecord.mobileNo = this.studentObj.mobileNo;
      currentRecord.email = this.studentObj.email;
      currentRecord.city = this.studentObj.city;
      currentRecord.address = this.studentObj.address;
      currentRecord.pincode = this.studentObj.pincode;
      localStorage.setItem('angular17-crud', JSON.stringify(this.studentList));
      this.closeModel();
    }
  }
}

export class Student {
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  address: string;
  pincode: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.mobileNo = '';
    this.email = '';
    this.city = '';
    this.address = '';
    this.pincode = '';
  }
}
