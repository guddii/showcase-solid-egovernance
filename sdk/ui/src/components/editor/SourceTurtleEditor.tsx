import { useSession } from "@inrupt/solid-ui-react";
import { useMemo } from "react";
import useSWR from "swr";
import { LoadingFailedFullbleed, LoadingFullbleed } from "../Loading";
import { hasNoDataOrError } from "../../helper/hasNoDataOrError";
import { formValuesGenerator } from "../../helper/formValuesGenerator";
import { message } from "antd";
import { TurtleEditorForm } from "./TurtleEditorForm";
import {
  getProperties,
  putResource,
  toUrlString,
  turtleFileGenerator,
  Thing,
} from "solid";
import { FormItem } from "../formItem/FormItem";

interface ISourceTurtleEditorProperties {
  thing?: Thing;
  thingUrl?: URL;
  subject: string;
}

export const SourceTurtleEditor = ({
  thing,
  thingUrl,
  subject,
}: ISourceTurtleEditorProperties) => {
  const { session } = useSession();

  const options = useMemo(() => ({ thing }), [thing]);
  const { data, error, isLoading } = useSWR(options, getProperties);

  if (isLoading) return <LoadingFullbleed />;
  if (hasNoDataOrError(data, error)) {
    console.error(error);
    return <LoadingFailedFullbleed />;
  }
  if (!thingUrl) {
    console.error("thingUrl missing");
    return <LoadingFailedFullbleed />;
  }

  const propertyValues = formValuesGenerator({ properties: data });

  const onFinish = async (values: Record<string, string>) => {
    try {
      const response = await putResource({
        url: thingUrl,
        body: turtleFileGenerator({ subject, values }),
        session,
      });
      message.success(response.statusText || "Successfully updated data");
    } catch (error: any) {
      console.error(error);
      message.error(error.message || "Error while updating data");
    }
  };

  return (
    <TurtleEditorForm initialValues={propertyValues} onFinish={onFinish}>
      {data.map((property) => (
        <FormItem key={toUrlString(property.predicate)} property={property} />
      ))}
    </TurtleEditorForm>
  );
};
