chrome.webRequest.onHeadersReceived.addListener(function (info) {
	var headers = info.responseHeaders;
	var url = info.url, type = info.type, id = info.tabId;

	var CSP = ["script-src 'none'", "style-src 'none'", "img-src 'none'", "object-src 'none'", "media-src 'none'"];

	var tx_rep = /^\S*.qq.com\/x\/cover\/\S*$/;
	var iqiyi_rep = /^\S*.iqiyi.com\/\S*$/;
	var youku_rep = /^\S*.youku.com\/\S*$/;
	var mgtv_rep = /^\S*.mgtv.com\/b\/\S*$/;
	
	if(tx_rep.test(url) || iqiyi_rep.test(url) || youku_rep.test(url) || mgtv_rep.test(url) ){
		/* #1 */
		for (var i = 0; i < headers.length; i++) {
			if (headers[i].name.toLowerCase() === "content-security-policy") {

				headers[i].value = CSP[3] + "; " + headers[i].value;
				headers[i].value = CSP[4] + "; " + headers[i].value;
				headers.push({'name': "Content-Security-Policy", 'value': headers[i].value});
				return {"responseHeaders": headers};
			}
		}
  
		/* #2 */
		var value = '';
		value = CSP[3] + "; " + value;
		value = CSP[4] + "; " + value;
		headers.push({'name': "Content-Security-Policy", 'value': value});
		return {"responseHeaders": headers};
	}

}, {"urls": ["<all_urls>"], "types": ["main_frame","script"]}, ["blocking", "responseHeaders"]);
