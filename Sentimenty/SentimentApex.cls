public class SentimentApex {
    
    @AuraEnabled
    public static String getSentiment(String Text2Analyze) {
        String options = 'version=2017-02-27&features=sentiment';
        String url = 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?'+options+'&text=' + Text2Analyze;
        String resultList = getHttp(url);
        return resultList;   
    }
    
    private static String getHttp (String url) {
        String username = 'username'; //your username
        String password = 'pass'; //your password
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint(url);
        Blob headerValue = Blob.valueOf(username + ':' + password);
        String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
        req.setHeader('Authorization', authorizationHeader);
        HTTPResponse res = http.send(req);
        system.debug(res.getBody());
        return res.getBody();
    }
}
