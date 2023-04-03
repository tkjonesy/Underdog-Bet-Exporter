let startDate;
let endDate;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'clicked') {
    
    if (!request.startDate || !request.endDate) {
      alert("Missing Date")
      return;
    }

    else {
      startDate = new Date(request.startDate.replace(/-/g, '\/'));
      endDate = new Date(request.endDate.replace(/-/g, '\/'));
    }

    if (document.location.href.indexOf("https://underdogfantasy.com/results/pick-em") === 0) {
      findResults();
    }

    else {
      alert("You are not on the target site");
    }
  }
});

let counter = 0;

async function findResults() {
  var stillSearching = true;

  while (stillSearching) {
    counter++;
    if (counter > 750) {
      alert('Breaking loop after 750 iterations.');
      break;
    }
    
    var expandButton = document.querySelectorAll('.styles__topRow__q6gER');
    var loadMoreButton = document.querySelector('[data-testid="button"]');

    for (let index = 0; index < expandButton.length; index++) {
      if (!expandButton[index].classList.contains("handled")) {
        expandButton[index].click();
        var parentElement = expandButton[index].parentElement;
        var dateElement = parentElement.querySelector('.styles__matchInfoText__ZOV5w');
        var dateString = dateElement.textContent;
        const dateRegex = /\b(\d{1,2}\/\d{1,2}\/\d{2,4})\b/;
        const dateMatch = dateString.match(dateRegex);

        if (dateMatch) {
         var testDate = new Date(dateMatch[0]).setHours(0, 0, 0, 0);
        }

        else {
          var testDate = new Date().setHours(0, 0, 0, 0);
        }

        if (isWithinRange(testDate, startDate, endDate) === true) {
          expandButton[index].classList.add("handled");
        }
        
        else if (isWithinRange(testDate, startDate, endDate) === false) {
          if (testDate <= startDate && testDate <= endDate) {
            expandButton[index].click();
            expandButton[index].classList.add("handled");
            alert("Finished")
            stillSearching = false;
            break;
          }

          else {
            expandButton[index].click();
            expandButton[index].classList.add("handled");
            continue;
          }
        }
        
        else {
          alert("Missing date");
          return;
        }
      }
    }

    if (loadMoreButton) {
      await new Promise(r => setTimeout(r, 1000));
      loadMoreButton.click();
    }
  }
}

function isWithinRange(date, startDate, endDate) {
  if (!startDate || !endDate) {
    return;
  }

  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }
  return date >= startDate && date <= endDate;
}
