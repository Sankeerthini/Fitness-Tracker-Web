import { Injectable } from '@angular/core';

interface Activity {
  type: string;
  duration: number;
  date: Date;
}

export interface Goal {
    type: string;
    target: number;
    current: number;
    units: string;
  }
  

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  private activities: Activity[] = [];
  private goals: Goal[] = [];

  constructor() {}

  addActivity(activity: Activity) {
    this.activities.push(activity);
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  addGoal(goal: Goal) {
    this.goals.push(goal);
  }

  getGoals(): Goal[] {
    return this.goals;
  }

  updateGoal(type: string, amount: number) {
    const goal = this.goals.find(g => g.type === type);
    if (goal) {
      goal.current += amount;
    }
  }
}
