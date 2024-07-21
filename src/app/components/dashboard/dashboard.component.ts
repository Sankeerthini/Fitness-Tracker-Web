import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessService } from '../../services/fitness.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activities = this.fitnessService.getActivities();
  goals = this.fitnessService.getGoals();

  constructor(private fitnessService: FitnessService) {}
}
