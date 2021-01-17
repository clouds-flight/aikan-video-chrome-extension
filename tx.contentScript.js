
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
			
			var success = false;
	
			var turl= location.href;
	
			function play(){
		
				if($('txpdiv').length>0 && !success){
					success = true;
			
					$('.mod_player_section')[0].innerHTML="";
					iframe='<iframe width="100%" height="100%" frameBorder="0" src="'+url+location.href+'"></iframe>';
					$('.mod_player_section').append(iframe);
				}
		
				if(turl!=location.href){
					location.href = location.href;
				}
		
				$('.mask_layer').remove();
				$('.mod_vip_popup').remove();
				$('.player_mask_tips').remove();
		
			}
	
			document.addEventListener('DOMSubtreeModified',function(){
				play()
			},false);
			
		}
		
		
	});


	

});