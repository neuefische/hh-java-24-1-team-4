package org.example.backend.model;

public class User {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private double weight;
    private double height;
    private double caloriesEatPerDay;
    private double targetWeightReduce;
    private double targetTimeInWeek;
    private enum activity
    {LOW (0.2) , MIDDLE (0.4), HIGH (0.6);
        private final double value; activity (double value){this.value=value;}}
    private Workout[] WorkoutPlan;
    private double Bmi = weight / ((height/100) * (height/100));
    private double caloriesUsedPerDayFromActivityAndWeight = (weight * 24 /* +activity.g*/);
    private double caloriesOverflowPerDay = caloriesEatPerDay - caloriesUsedPerDayFromActivityAndWeight;
    private double caloriesNeedToReducePerWeekForTargetWeightReduce = (caloriesOverflowPerDay * 7) + ((targetWeightReduce * 7000) / targetTimeInWeek);


    public User(String firstname, String lastname, double weight, double height, double caloriesEatPerDay,
                double targetWeightReduce, double targetTimeInWeek){
        this.firstname = firstname;
        this.lastname = lastname;
        this.weight = weight;
        this.height = height;
        this.caloriesEatPerDay = caloriesEatPerDay;
        this.targetWeightReduce = targetWeightReduce;
        this.targetTimeInWeek = targetTimeInWeek;    }


    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getCaloriesEatPerDay() {
        return caloriesEatPerDay;
    }

    public void setCaloriesEatPerDay(double caloriesEatPerDay) {
        this.caloriesEatPerDay = caloriesEatPerDay;
    }

    public double getTargetWeightReduce() {
        return targetWeightReduce;
    }

    public void setTargetWeightReduce(double targetWeightReduce) {
        this.targetWeightReduce = targetWeightReduce;
    }

    public double getTargetTimeInWeek() {
        return targetTimeInWeek;
    }

    public void setTargetTimeInWeek(double targetTimeInWeek) {
        this.targetTimeInWeek = targetTimeInWeek;
    }

    public Workout[] getWorkoutPlan() {
        return WorkoutPlan;
    }

    public void setWorkoutPlan(Workout[] workoutPlan) {
        WorkoutPlan = workoutPlan;
    }

    public double getBmi() {
        return Bmi;
    }

    public double getCaloriesUsedPerDayFromActivityAndWeight() {
        return caloriesUsedPerDayFromActivityAndWeight;
    }

    public double getCaloriesOverflowPerDay() {
        return caloriesOverflowPerDay;
    }

    public double getCaloriesNeedToReducePerWeekForTargetWeightReduce() {
        return caloriesNeedToReducePerWeekForTargetWeightReduce;
    }
}
