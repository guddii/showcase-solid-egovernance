"use client";
import { SessionContent, ControlsAutofill, TurtleEditor } from "ui";
import { TaxOfficeModel } from "solid";

export default function Page() {
  return (
    <SessionContent alwaysShowChildren>
      <TurtleEditor model={TaxOfficeModel.create({ subject: "#me" })}>
        <ControlsAutofill />
      </TurtleEditor>
    </SessionContent>
  );
}
