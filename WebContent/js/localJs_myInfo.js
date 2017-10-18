/**
 * 
 */
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"Ajax_servlet",
		data:{
			type:"ifLogin"
		},
		success:function(data){
			if(data == "true"){
				$("#nav_loginInfo_unLogin").attr("style","display:none");
				$("#nav_loginInfo_isLogin").attr("style","display:block");
			}else{
				location.href="login.jsp"
			}
		}
	})
	$("#signOut").click(function(){
		$.ajax({
			type:"get",
			url:"Ajax_servlet",
			data:{
				type:"logout"
			},
			success:function(data){
				location.reload();
			}
		})
	})
	$(".items").click(function(){
		$("#form_item_ID").val($(this).attr("itemID"));
		$("#form_item").submit();
	})
})