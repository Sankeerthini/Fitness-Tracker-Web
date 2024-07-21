import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../../services/fitness.service';
import { Goal } from '../../services/fitness.service';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  goal: Goal = {
    type: '',
    target: 0,
    current: 0,
    units: 'sets'
  };
  goals: Goal[] = this.fitnessService.getGoals();

  constructor(private fitnessService: FitnessService) {}

  onSubmit() {
    this.fitnessService.addGoal(this.goal);
    this.goals = this.fitnessService.getGoals();
    this.goal = { type: '', target: 0, current: 0, units: 'sets' };
  }
  deleteGoal(index: number) {
    this.goals.splice(index, 1);
  }
}
