({
	myAction : function(component, event, helper) {
		var weight = component.get("v.weight");
        var height = component.get("v.height")/100;
        console.log(weight + "lbs");
        var bmi = (weight * 0.45)/Math.pow(height,2);
        console.log(bmi);
        component.set("v.bmi", bmi);
	}
})
