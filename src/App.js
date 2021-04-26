import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./component/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName="admin"
      userSecret="1234"
      renderChatFeed={(props) => <ChatFeed {...props} />}
    />
  );
};

export default App;
