package com.yonyou.sxqcapp;

import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.gateway.exception.GatewayServiceException;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;

public class TokenInit {


	public String tokendata(String ages) throws JSONException, GatewayServiceException{

		   JSONObject json = new JSONObject(ages);
			Map map = UmContextUtil.transJsonToMap(json);
			String urlToken = (String) map.get("urlToken");
			if( urlToken!=null && !"".equals(urlToken)){
				map.put("urlToken", urlToken);
			}
			String appid = (String) map.get("appid");

			IGatewayService service = GatewayServiceFactory.findGatewayService(appid, "tokendata", map);
			return (String)service.doService();
		   
	   
	}




}
