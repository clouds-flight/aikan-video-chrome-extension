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

			$(document).on('click','a',function(){
				
				href = $(this).attr('href');
				rep = /^\S*.iqiyi.com\/v_\S*\.html\S*$/;
				if(rep.test(href)){
					location.href=$(this).attr('href');
				}
			})
	

			$('iqpdiv').remove();
			//将vip解析链接通过iframe添加进来
			iframe='<iframe width="100%" height="100%" frameBorder="0" allowfullscreen  src="'+'https://9kjx.com/?url='+location.href+'"></iframe>';
			$('#flashbox').append(iframe);
		
	
			document.addEventListener('DOMSubtreeModified',function(){

					$('.qy-player-vippay-popup').parent().remove();
					$('.iqp-player').remove();
					
					if(turl!=location.href){
						location.href = location.href;
					}
		
			},false);
			
		}
		
		
	});


	

});