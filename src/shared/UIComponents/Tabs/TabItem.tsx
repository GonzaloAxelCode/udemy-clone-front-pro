"use client";

import Link from "next/link";

function TabItem(props: any) {
  const { children, href = null } = props;

  if (href) {
    return (
      <Link href={href}>
        <div style={{ display: props.isActive ? "block" : "none" }}>
          {props.children}
        </div>
      </Link>
    );
  }

  return (
    <div style={{ display: props.isActive ? "block" : "none" }}>
      {props.children}
    </div>
  );
}

export default TabItem;
