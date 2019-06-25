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