package com.yonyou.sxqcapp;

import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.gateway.exception.GatewayServiceException;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;

public class HomeInit {


	public String homedata(String ages) throws JSONException, GatewayServiceException{

		   JSONObject json = new JSONObject(ages);
			Map map = UmContextUtil.transJsonToMap(json);
				String urlToken = (String) map.get("urlToken");
				if(urlToken !=null && "".equals(urlToken)){
				   map.put("urlToken",urlToken);
				}
				String dmsFuncId = (String) map.get("dmsFuncId");
				map.put("dmsFuncId",dmsFuncId);
				String sort = (String) map.get("sort");
				map.put("sort",sort);
				String order = (String) map.get("order");
				map.put("order",order);
				String limit = (String) map.get("limit");
				map.put("limit",limit);
				String offset = (String) map.get("offset");
				map.put("offset",offset);
				String sessionId = (String) map.get("sessionId");
				String tenantId = (String) map.get("tenantId");
				map.put("JSESSIONID", sessionId);
				map.put("tenantId", tenantId);
			
				
			String appid = (String) map.get("appid");

			IGatewayService service = GatewayServiceFactory.findGatewayService(appid, "homedata", map);
			return (String)service.doService();
		   
	   
	}



}
