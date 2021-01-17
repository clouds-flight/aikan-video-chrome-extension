
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
		
			var content = $('.m-video-player-wrap').parent();
			$('.m-video-player-wrap').remove();
			
			$('.m-video-poster').remove();
			//将vip解析链接通过iframe添加进来
			iframe='<div style="width:100%;height:200px;"><iframe width="100%" height="100%" frameBorder="0" allowfullscreen src="'+url+location.href+'"></iframe></div>';
			content.prepend(iframe);
		

			
			document.addEventListener('DOMSubtreeModified',function(){
				if(turl!=location.href){
				location.href = location.href;
			}
			},false);
			
		}
		
		
	});


	

});