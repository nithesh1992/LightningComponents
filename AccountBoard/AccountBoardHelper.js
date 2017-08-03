({
	pollApex : function(component, event, helper) { 
        helper.callApexMethod(component,helper);
        
        //execute callApexMethod() again after 5 sec each
        window.setInterval(
            $A.getCallback(function() { 
                helper.callApexMethod(component,helper);
            }), 5000
        );        
    },
    handleResponse : function (response, component){
        var retVal = response.getReturnValue() ;
        console.log(JSON.stringify(response.getReturnValue()));
        component.set("v.AccountInfo",retVal);
       
       
    },
    callApexMethod : function (component,helper){    
        var action = component.get("c.getAccountDetails"); 
        action.setParams({"recordId": component.get("v.recordId")});
        action.setCallback(this, function(response) {
            this.handleResponse(response, component);
        });
        $A.enqueueAction(action); 
    } 
})