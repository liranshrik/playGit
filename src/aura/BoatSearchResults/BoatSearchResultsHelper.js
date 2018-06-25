/**
 * Created by lshriki on 18/03/2018.
 */
({
    onSearch : function(component, event, helper){
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : component.get("v.boatTypeId")
        });
        action.setCallback(this, function(response){
            console.log('returned value' + response.getReturnValue());
            var state = response.getState();
            console.log('state'+state);
            if (state === "SUCCESS") {
                component.set("v.boats", response.getReturnValue());
            }
            if(state === "ERROR"){
                console.log('error'+ response.getError());
            }

        });
        $A.enqueueAction(action);
    }
})