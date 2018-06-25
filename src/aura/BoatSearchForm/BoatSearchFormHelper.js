/**
 * Created by lshriki on 18/03/2018.
 */
({
    loadBoatTypes: function(component){
        //create the action
        console.log("Helper started");
        var action = component.get("c.getBoatTypes");

        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.BoatTypes", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        //send action off to be executed
        $A.enqueueAction(action);
    },
})