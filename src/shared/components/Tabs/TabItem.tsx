"use client";
function TabItem(props: any) {
  return (
    <div style={{ display: props.isActive ? "block" : "none" }}>
      {props.children}
    </div>
  );
}

export default TabItem;
