/**
 * Created by lshriki on 19/03/2018.
 */
({
    onUserInfoClick : function(component,event,helper){
        var userId = event.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : userId,
        });
        navEvt.fire()

    },
    doInit : function(component,event,helper){
        console.log("BRCjs: doInit");
        helper.onInit(component, event);
    },
    // refresh : function(component,event,helper){
    //     console.log("refresh called")
    //     this.doInit;
    // }
})