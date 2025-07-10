// 是否检测环境
window.INSPECT = true;
// 服务器配置
window.SERVER_MODE = 'mbp';
window.SERVER_IP = '10.168.2.100';
window.SERVER_PORT = '9300';
// CIME文件名
window.CIME_FILE = 'http://10.17.196.238:8000/testcase/supervision/device_resource.cime';
window.CIME_NAMES = ['device_resouce.cime', 'videocfmresult.cime', 'returnlinkage.cime', 'datacall.cime'];
// 消息报文上限
window.MESSAGE_LIMIT = 200;
// 请求超时时间
window.REQUEST_TIMEOUT = 60000;
// 联动发送间隔
window.LINKAGE_INTERVAL = 5000;
// 联动信号枚举
window.LINKAGE_ENUM = {
  DEVICE_RESOURCE: 'device_resource',
  MONITOR_SIGNAL: 'monitor_signal',
  LINKAGE_SIGNAL: 'linkage_signal',
};
// 识别框绘制样式
window.STROKE_STYLE = {
  lineColor: '#eb5137',
  lineWidth: 4,
};
// 测试仪参数配置
window.BASE_MODEL = {
  base_port: '10011', // 默认服务端口
  maux_port: '9300', // 主辅监控端口
  voice_port: '8972', // 声纹监听端口
  mqtt_port: '1883', // MQTT服务端口
  mqtt_user: 'Yzzx220', // MQTT用户名称
  mqtt_pawd: 'Yzzx@220901', // MQTT验证密码
};
window.MASTAUX_MODEL = {
  equipment_ip: '10.17.13.6',
  equipment_port: 10033,
  service_ip: '10.17.13.6', // 集控系统地址
  service_port: 9300, // 集控系统端口
  service_code: 'Center01', // 集控系统编码
};
window.BUSINESS_MODEL = {
  service_ip: '10.17.13.6',
  service_port: 10033,
  kafka_ip: '10.17.196.230',
  kafka_port: 9092,
  rocketmq_ip: '10.17.196.230',
  rocketmq_port: 9876,
};
window.ALGORITHM_MODEL = {
  service_ip: '10.17.13.6',
  service_port: 10013,
  send_code: 'Center01',
  recv_code: 'Server01',
  ftps_ip: '10.17.13.6',
  ftps_port: 10014,
  ftps_user: 'admin',
  ftps_passwd: 'qwer1234',
};
window.PATROLHOST_MODEL = {
  service_ip: '10.17.13.5',
  service_port: 10011,
  service_code: 'Center01',
  ftps_ip: '10.17.13.5',
  ftps_port: 10012,
  ftps_user: 'admin',
  ftps_passwd: 'qwer1234',
  station_config: [
    {
      station_name: '测试站02',
      station_code: '999895aa-61bc-43a7-9aaf-a9e2829a152a',
      client_code: 'Client02',
      robot_code: 'Robot02',
      drone_code: 'Drone02',
      nest_code: 'Nest02',
    },
  ],
};
