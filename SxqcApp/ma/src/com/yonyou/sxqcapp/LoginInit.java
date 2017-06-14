package com.yonyou.sxqcapp;

import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.gateway.exception.GatewayServiceException;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;

public class LoginInit {

	public String login(String ages) throws JSONException, GatewayServiceException{

		   JSONObject json = new JSONObject(ages);
			Map map = UmContextUtil.transJsonToMap(json);
			    String groupCode = (String) map.get("groupCode");
				map.put("groupCode",groupCode);
				String validate = (String) map.get("validate");
				map.put("validate",validate);
				String str = (String) map.get("_");
				map.put("_",str);
				String username = (String) map.get("username");
				String password = (String) map.get("password");
				map.put(username, username);
				map.put(password, password);
			
			String appid = (String) map.get("appid");

			IGatewayService service = GatewayServiceFactory.findGatewayService(appid, "login", map);
			//String resultStr = new JSONObject(map).toString();
			return (String)service.doService();
		   
	   
	}


}
