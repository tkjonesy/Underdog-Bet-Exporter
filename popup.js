function popup() {
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked", "startDate": startDate, "endDate": endDate});
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("my-button").addEventListener("click", popup);
});