({
    getBMI : function(weight, height){
      return ((weight * 0.45)/Math.pow(height/100,2)).toFixed(1);    
    },
    
    getCategory : function(output){
       var category;
       if (output<18.5)
       category = "Underweight";
       else if (output>=18.5 && output<=25)
        category = "Normal";
       else if (output>=25 && output<=30)
        category = "Overweight";
       else if (output>30)
        category = "Obese";
       return category;
    }
})