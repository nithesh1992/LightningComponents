({
    
    init : function(component, event, helper) {
          
    },
    
    ConvertIt : function(component, event, helper) {
      var action = component.get("c.convertIt");
        action.setParams({"recordId": component.get("v.recordId")});
        action.setCallback(this, function(res) {
        var response = res.getReturnValue();
        var state = action.getState();
        console.log(response);
        if(component.isValid() && state == "SUCCESS"){          
            
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                  "title": "Success!",
                "message": "This Lead has been converted.",
                  "type ": "success"
            });

            toastEvent.fire(); 
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": response
            });
            navEvt.fire();
            
         } else if (state == "ERROR") {
            console.log('There was a problem and the state is: '+ action.getState());
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                  "title": "Oops!",
                "message": "Something went Wrong!",
                  "type ": "error"
            });
         }
      });
      $A.enqueueAction(action);
    }
})