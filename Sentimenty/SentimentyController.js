({
    updateSearch: function(component, event, helper) {
        var inputText = escape(component.find("Text2Analyze").get("v.value"));
        console.log(inputText.length);
        if (inputText.length >= 15) {
            helper.analyzeIt(component, inputText);
        }
        else{
            component.set("v.result", '');
            component.set("v.percentDone", 0);  
            helper.toastThis('Not Enough text to Analyze..' , 'Sorry!' );
        }
        
    }    
})