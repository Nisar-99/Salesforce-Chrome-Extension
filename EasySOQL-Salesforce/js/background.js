
// Listening to messages page
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(domainUrl) {
        console.log("message recieved: " + domainUrl);
        chrome.cookies.getAll({ 'domain' : domainUrl }, function(cookie){ 
            cookie.forEach(obj => {
                if(obj.name == "sid"){
                    port.postMessage(obj.value);
                }
            });//for 
        }); //cc
    });//msg
 })
