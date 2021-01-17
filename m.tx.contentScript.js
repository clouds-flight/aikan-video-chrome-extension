
$(function(){ 

	var items=["","","","",""];
	var checked=0;

	chrome.storage.sync.get(['aikanUrlItems','aikanUrlChecked'], function(data) {
		
		//将items显示
		if(data.aikanUrlItems!=undefined)
		{
			items=data.aikanUrlItems;
		}

		//选中当前
		if(data.aikanUrlChecked!=undefined)
		{
			checked=data.aikanUrlChecked;
		}
		
		var url=$.trim(items[checked]);
		
		
		if(url!=""){

			var turl= location.href;
			
			$('.mod_player')[0].innerHTML="";
			iframe='<iframe width="100%" height="100%" allowfullscreen frameBorder="0" src="'+url+location.href+'"></iframe>';
			$('.mod_player').append(iframe);
	
			document.addEventListener('DOMSubtreeModified',function(){
				if(turl!=location.href){
					location.href = location.href;
				}
			},false);
			
		}
		
		
	});


	

});