import { Route, Switch } from "react-router-dom";
import { FolderContentPage } from "./pages/folder-content-page";

export function MainRoutes(): JSX.Element {
  return (
    <Switch>
      <Route path={'/folder'} component={FolderContentPage} />
    </Switch>
  );
}