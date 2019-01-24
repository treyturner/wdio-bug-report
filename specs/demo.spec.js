before(function() {
  browser.url('/');
  search.input.waitForDisplayed(5000);
  search.input.setValue("webdriverio");
  search.submit.click();
  search.resultsSection.waitForDisplayed(8000);
});

describe("selecting multiple elements via array", () => {
  it("does work", () => {
    console.log("Access via array:\n");
    for (let i = 0; i < 3; i++) {
      //Print the title, snippit, and url for the first three results
      console.log(`title[${i}]: ${search.results(i).titleViaArray.getText()}`);
      console.log(`snippit[${i}]: ${search.results(i).snippitViaArray.getText()}`);
      console.log(`url[${i}]: ${search.results(i).urlViaArray.getText()}\n`);
    }
  });
});

describe("selecting a specific element using nth-of-type", () => {
  it("doesn't work", () => {
    console.log("Access via CSS:\n");
    for (let i = 0; i < 3; i++) {
      //Print the title, snippit, and url for the first three results
      //Fails because it can only find the first
      console.log(`title[${i}]: ${search.results(i).titleViaCss.getText()}`);
      console.log(`snippit[${i}]: ${search.results(i).snippitViaCss.getText()}`);
      console.log(`url[${i}]: ${search.results(i).urlViaCss.getText()}\n`);
    }
  });
});
