/**
 * Created by lshriki on 18/03/2018.
 */

public with sharing class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId)
    {
        if(!String.isEmpty(boatTypeId))
            return [SELECT Id,Name,Picture__c,Contact__r.Name from Boat__c WHERE boatType__c =: boatTypeId];
        return [SELECT Id,Name,Picture__c,Contact__r.Name from Boat__c];
    }

}