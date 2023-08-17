"use client";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useIdentity } from "../../contexts/IdentityContext";
import { ButtonProps } from "antd/es/button/button";

interface IControlsLoginProperties extends ButtonProps {}

export function ControlsLogin(options: IControlsLoginProperties) {
  const { webId, setDrawerIdentityOpen } = useIdentity();

  const showDrawer = () => {
    setDrawerIdentityOpen(true);
  };

  if (webId) {
    return null;
  }

  return (
    <Button
      type="primary"
      size="large"
      style={{ width: "100%" }}
      onClick={showDrawer}
      icon={<LoginOutlined rev={"solidLogin"} />}
      {...options}
    >
      Login
    </Button>
  );
}
