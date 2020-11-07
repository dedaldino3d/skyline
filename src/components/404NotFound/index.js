import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

export const NotFound404 = () => {
  const history = useHistory();

  const handleBack = (e) => {
    e.stopPropagation();
    history.push("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={handleBack}>Back Home</Button>}
    />
  );
};

export default NotFound404;
