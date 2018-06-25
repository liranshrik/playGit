/**
 * Created by lshriki on 19/03/2018.
 */
({
    onBoatSelected : function(component, event, helper) {
        console.log('Inside Boat Selected Event:');
        var boat = event.getParam("boat");
        component.set("v.id",boat.Id);
        component.set('v.selectedBoat',boat);
        console.log('Completed Boat Selected Application EVENT:'+boat.Id);
        var tempRec = component.find("service");
        tempRec.set("v.recordId", boat.Id);
        tempRec.reloadRecord();
        console.log("Record template initialized: " + boat.Id);
    },
    onRecordUpdated : function(component, event, helper){

    },
    onBoatReviewAdded : function(component, event, helper) {
        console.log("Event received");
        component.set("v.selectedTabId", "boatReviewTab");
        //invoke refresh() method
        var reviewsCmp = component.find("boatReviewsCmp");
        console.log("reviewsCmp: " + reviewsCmp);
        if(reviewsCmp) {
            reviewsCmp.refresh();
        }



    },
})