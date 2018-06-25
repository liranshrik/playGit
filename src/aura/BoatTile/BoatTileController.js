/**
 * Created by lshriki on 18/03/2018.
 */
({
    onBoatClick : function (component,event,helper) {
        var boatId = component.get("v.boat.Id");
        var boatSelect = component.getEvent("BoatSelect");
        boatSelect.setParams({"boatId": boatId});
        boatSelect.fire();

        // Fire Additional Apllication event step #6 BoatSelected
        var boat = component.get("v.boat");
        var appEvent = $A.get("e.c:BoatSelected");

        appEvent.setParams({
            "boat": boat
        });
        appEvent.fire();

        //send geolocation to map.cmp through the PlotMapMarker Application event
        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var sObjectId;
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerAppEvent.setParams({
                "lat"   : lat,
                "long"  : long,
                "label" : label,
                "SObjectId" : boat.Id});
        plotMapMarkerAppEvent.fire();
    }

})