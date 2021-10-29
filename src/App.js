import "./styles.css";
import { Button, Toast } from "@douyinfe/semi-ui";

export default function App() {
  return (
    <div className="App">
      <Button onClick={() => Toast.success({ content: "It works already?" })}>
        Click Here
      </Button>
    </div>
  );
}
