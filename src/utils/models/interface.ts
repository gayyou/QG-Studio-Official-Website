// 导航栏的数据类型
export interface NavList {
  // nav的值
  value: String;
  // 容器
  children: Array<NavList>;
  // 标识，后期进行显示的切换用
  label: String;
  // 是否点击状态
  isActive: Boolean;
}

export interface AboutList {
  // 图片的路径
  url: String;
  // 标题
  title: String;
  // 信息
  message: Array<String>;
  // 主键
  id: String;

  height: Number;

  position: String;
}