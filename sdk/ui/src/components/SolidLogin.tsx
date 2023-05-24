import { useEffect, useState } from "react";
import { LoginButton, logger } from "solid";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { LoginOutlined } from "@ant-design/icons";

interface Item {
  key: string;
  label: string;
}

type Items = Array<Item>;

export function SolidLogin() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(globalThis.location.href);
  }, [setCurrentUrl]);

  const items: Items = [
    "https://solidcommunity.net",
    "https://solidweb.org",
    "https://inrupt.net",
    "https://trinpod.us",
    "https://solidweb.me",
  ].map((value, index) => {
    return {
      key: String(index),
      label: String(value),
    };
  });

  const [idp, setIdp] = useState(items[0].label);

  const handleMenuClick: MenuProps["onClick"] = (event) => {
    const item: Item | undefined = items.find(
      (value: Item) => value.key === event.key
    );
    if (item) setIdp(item.label);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Space>
      <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
        {idp}
      </Dropdown.Button>
      <LoginButton
        authOptions={{ clientName: "Solid app" }}
        oidcIssuer={idp}
        redirectUrl={currentUrl}
        onError={(error) => logger({ error })}
      >
        <Button icon={<LoginOutlined rev={"solidLogin"} />}>Login</Button>
      </LoginButton>
    </Space>
  );
}