import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentsTableComponent } from '../students-table/students-table.component';
import { StudentRecordsComponent } from "../student-records/student-records.component";
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    StudentsTableComponent,
    StudentRecordsComponent,
    ContactUsComponent,
    MatButtonToggleModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  theme: string = "default";

  onDefaultTheme() {
    // Set the default theme
    document.getElementsByTagName("body")[0].className = "";
    this.theme = "default";
  }

  onDarkTheme() {
    // Set the default theme
    document.getElementsByTagName("body")[0].className = "dark-theme";
    this.theme = "dark";
  }
}
