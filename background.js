const pattern = ["https://developer.mozilla.org/*", "https://www.bing.com/*"];
const targetUrl = "chrome-extension://ilmcfeflhfhgecjhealfmpamibkajkbg/phishNet.html";
const originalUrl = ${requestDetails.url};

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (pattern.includes(requestDetails.url)) {
    return{
		redirectUrl: requestDetails.url
	};
  }
  return {
    redirectUrl: targetUrl
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:["<all_urls>"]},
  ["blocking"]
);
