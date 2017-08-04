public class accountBoardController {

/**
 * @Author		:		Nithesh N
 * @Date		:		Jul-17-2017
 * @Desc		:		This class is used by LEX component - AccountBoard
 * 			:		    It returns total number of contacts,Cases,Opportunities for a given Account.
 * */
    
    @AuraEnabled
    public static Map<String, Integer> getAccountDetails(ID recordId) {
        Map<String, Integer> accInfoMap = new Map<String, Integer>();
        accInfoMap.put('con', getNumberOfContacts(recordId));
        accInfoMap.put('opp', getNumberOfOpps(recordId));
        accInfoMap.put('cas', getNumberOfCases(recordId));
        System.debug(accInfoMap.values());
        return accInfoMap;
    }
    
    @AuraEnabled
    public static Integer getNumberOfContacts(ID recordId) {
        Integer contactCount = [SELECT count() FROM Contact WHERE AccountId = :recordId];
        System.debug(contactCount);
        return contactCount;
    }
    
    @AuraEnabled
    public static Integer getNumberOfOpps(ID recordId) {
        
        return [SELECT count() FROM Opportunity WHERE AccountId = :recordId];
    }
    
    @AuraEnabled
    public static Integer getNumberOfCases(ID recordId) {
        
        return [SELECT count() FROM Case WHERE AccountId = :recordId];
    }
    
}