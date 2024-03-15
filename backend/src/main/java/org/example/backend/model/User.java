package org.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class User {
    private String _id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private double weightInKg;
    private double heightInCm;
    private double caloriesEatPerDay;
    private double targetWeightReduce;
    private double targetTimeInWeek;

    private final double caloriesUsedPerDayFromWeight = weightInKg * 24 * 1.2;
    private final double caloriesOverflowPerDay = caloriesEatPerDay - caloriesUsedPerDayFromWeight;
    private final double caloriesNeedToReducePerWeekForTargetWeightReduce = (caloriesOverflowPerDay * 7) + ((targetWeightReduce * 7000) / targetTimeInWeek);

}
    /*private enum activity {
        LOW (0.2) , MIDDLE (0.4), HIGH (0.6);
        private final double value; activity (double value){this.value=value;}
        public double getValue() {
            return value;
        }
    }
    private Workout[] workoutPlan;
    private double bmi = weightInKg / ((heightInCm /100) * (heightInCm /100));
    private double caloriesUsedPerDayFromActivityAndWeight = (weightInKg * 24 *//* +activity.g*//*);
    private double caloriesOverflowPerDay = caloriesEatPerDay - caloriesUsedPerDayFromActivityAndWeight;
    private double caloriesNeedToReducePerWeekForTargetWeightReduce = (caloriesOverflowPerDay * 7) + ((targetWeightReduce * 7000) / targetTimeInWeek);


    public User(String firstname, String lastname, double weight, double height, double caloriesEatPerDay,
                double targetWeightReduce, double targetTimeInWeek){
        this.firstname = firstname;
        this.lastname = lastname;
        this.weightInKg = weight;
        this.heightInCm = height;
        this.caloriesEatPerDay = caloriesEatPerDay;
        this.targetWeightReduce = targetWeightReduce;
        this.targetTimeInWeek = targetTimeInWeek;
    }

}
*/