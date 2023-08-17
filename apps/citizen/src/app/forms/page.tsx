"use client";
import { STAMMDATEN_FILE_PATH } from "solid";
import {
  SessionContent,
  EditorTurtle,
  PageProvider,
  FolderStructureVerification,
  ControlsDataset,
  usePage,
  LayoutContent,
} from "ui";
import { Card } from "antd";

const currentItem = {
  title: "Stammdaten",
  key: "stammdaten",
};

const breadcrumbItems = [
  {
    title: "Forms",
    key: "forms",
  },
  currentItem,
];

const EditorTurtleWithPageDataset = () => {
  const { dataset } = usePage();

  return <EditorTurtle dataset={dataset} subject="#me" />;
};

const metadata = { title: "Citizen" };

export default function Page() {
  return (
    <SessionContent>
      <PageProvider>
        <FolderStructureVerification>
          <LayoutContent
            options={{ breadcrumbItems, currentItem, metadata }}
            extra={
              <ControlsDataset
                datasetPath={STAMMDATEN_FILE_PATH}
                enableInitialLoading
                buttonLabel="Reload Stammdaten"
              />
            }
          >
            <Card title={"Stammdaten"}>
              <EditorTurtleWithPageDataset />
            </Card>
          </LayoutContent>
        </FolderStructureVerification>
      </PageProvider>
    </SessionContent>
  );
}