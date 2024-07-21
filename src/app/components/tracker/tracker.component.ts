import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../../services/fitness.service';

interface Activity {
  type: string;
  duration: number;
  date: Date;
}

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  user = {
    name: '',
    height: 0,
    weight: 0,
    age: 0
  };

  activity: Activity = {
    type: '',
    duration: 0,
    date: new Date()
  };

  activities: Activity[] = this.fitnessService.getActivities();
  dailyActivities: Activity[] = [];

  constructor(private fitnessService: FitnessService) {}

  ngOnInit() {
    this.updateDailyActivities();
    this.updateStatistics();
  }

  onUserProfileSubmit() {
    console.log("User profile updated:", this.user);
    this.updateStatistics();
  }

  onSubmit() {
    this.activity.date = new Date();
    this.fitnessService.addActivity(this.activity);
    this.activities = this.fitnessService.getActivities();
    this.updateDailyActivities();
    this.activity = { type: '', duration: 0, date: new Date() };
  }

  updateDailyActivities() {
    const today = new Date().toDateString();
    this.dailyActivities = this.activities.filter(
      act => new Date(act.date).toDateString() === today
    );
  }

  updateStatistics() {
    const userProfileStats = document.getElementById('userProfileStats');
    if (userProfileStats) {
      userProfileStats.innerHTML = `
        <h4>User Profile Statistics</h4>
        <ul>
          <li><strong>Name:</strong> ${this.user.name}</li>
          <li><strong>Height:</strong> ${this.user.height} cm</li>
          <li><strong>Weight:</strong> ${this.user.weight} kg</li>
          <li><strong>Age:</strong> ${this.user.age} years</li>
        </ul>
      `;
    }
  }
}
