$(function(){ 

	
	var items=["","","","",""];
	var checked=0;
	
	chrome.storage.sync.get(['aikanUrlItems','aikanUrlChecked'], function(data) {
		
		//将items显示
		if(data.aikanUrlItems!=undefined)
		{
			items=data.aikanUrlItems;
		}
		items.forEach(function(value,index){
				$("input[type=text]").eq(index).val(value);
		});
		
		//选中当前
		if(data.aikanUrlChecked!=undefined)
		{
			checked=data.aikanUrlChecked;
		}
		
		$('input[type=radio]').eq(checked).attr("checked",true);
		
	});
	

	$('input[type=radio]').change(function() {
		checked = $("input[type='radio']:checked").val();
		chrome.storage.sync.set({aikanUrlItems: items , aikanUrlChecked: checked}, function() {
			
		});
    });
	
	$("input[type=text]").blur(function(){
		var index = $(this).attr('data-id');
		items[parseInt(index)]=$(this).val();
		chrome.storage.sync.set({aikanUrlItems: items , aikanUrlChecked: checked}, function() {
			
		});
	});
});