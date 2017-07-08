({
    myAction : function(component, event, helper) {
        var bmi = helper.getBMI(component.get("v.weight"), component.get("v.height"));
        var cat = helper.getCategory(bmi);
        console.log(cat);
        console.log(bmi);
        var result = bmi+" --> "+cat+"!";
        if(isNaN(bmi))
            result = "";
        component.set("v.bmi", result);
    }
 })