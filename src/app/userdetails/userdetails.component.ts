import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {


  baseServerUrl = "https://localhost:7038/api/"
  users: any[] = [];

  constructor(private http: HttpClient , private redirect:Router, public userService:AuthService) {

  }

  ngOnInit(): void {
    // Make a GET request to fetch users from your API
    this.http.get<any[]>(this.baseServerUrl + 'User/GetAllUsers').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }



  editUser(user: any) {
    // Implement edit functionality
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Implement delete functionality
    console.log('Delete user:', user);
  }

}
