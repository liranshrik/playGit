/**
 * Created by lshriki on 18/03/2018.
 */

public with sharing class BoatSearchFormCtrl {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes()
    {
        return [SELECT Id, Name from BoatType__c ORDER BY Name];
    }
}