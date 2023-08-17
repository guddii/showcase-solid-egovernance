"use client";
import {
  SessionContent,
  ControlsAutofill,
  EditorTurtle,
  LayoutContent,
} from "ui";
import { TaxOfficeModel } from "solid";
import { Card, Form } from "antd";

const currentItem = {
  title: "Property Tax Return",
  key: "propertyTaxReturn",
};

const breadcrumbItems = [
  {
    title: "Forms",
    key: "forms",
  },
  currentItem,
];

const metadata = { title: "Tax Office" };

export default function Page() {
  const [form] = Form.useForm();
  return (
    <SessionContent alwaysShowChildren>
      <LayoutContent options={{ breadcrumbItems, currentItem, metadata }}>
        <Card title={"Main Form"} extra={<ControlsAutofill form={form} />}>
          <EditorTurtle
            form={form}
            model={TaxOfficeModel.create({ subject: "#me" })}
          ></EditorTurtle>
        </Card>
      </LayoutContent>
    </SessionContent>
  );
}