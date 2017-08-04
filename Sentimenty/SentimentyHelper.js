({
    toastThis : function(message, title) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": title || "Error:",
            "message": message,
            "type": "error",
            "mode": "sticky"
        });
        toastEvent.fire();
    },
    
    analyzeIt : function(component, inputText) {
        var action = component.get("c.getSentiment");
        action.setParams({
            "Text2Analyze": inputText
        });
        action.setCallback(this, function(response) {
            var state = action.getState();
            console.log('response state: '+  state);
            var data = JSON.parse(response.getReturnValue());
            if(!(JSON.stringify(response.getReturnValue()).includes('error'))){
                var resultLabel = data.sentiment.document.label;
                var resultScore = data.sentiment.document.score.toFixed(2)*100; //Converting to %
                var results = resultLabel + ' with Score: ' + resultScore ;
                console.log(results);
                component.set("v.result", resultLabel +'  ('+resultScore+'%)');
                component.set("v.percentDone", resultScore);  
            }
        });
        $A.enqueueAction(action);
    }
})