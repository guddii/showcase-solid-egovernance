"use client";
import { Divider } from "antd";
import { InboxViewer, SessionContent } from "ui";

export default function Page() {
  return (
    <>
      <Divider>Inbox</Divider>
      <SessionContent>
        <InboxViewer />
      </SessionContent>
    </>
  );
}