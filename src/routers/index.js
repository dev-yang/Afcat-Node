import { Route, Switch, useLocation } from "react-router-dom";
import { router_list } from "./router.config";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function RootRoutes(props) {
  const location = useLocation();
  const {pathname} = location;
  return <TransitionGroup>
    <CSSTransition
        timeout={500}
        key={pathname}
        onEnter={(node)=>{
            node.style.transition = "0.5s opacity";
            node.style.opacity = 0;
        }}
        onEntering={(node)=>{ 
          node.style.opacity = 1;
        }}
        onEntered={(node)=>{
          node.style.transition = "none";
        }}
        onExit={(node)=>{
           node.style.transition = "0.5s opacity";
        }}
        onExiting={(node)=>{
          node.style.opacity = 0;
        }}
        onExited={(node)=>{

        }}
    >
      <Switch location={location}>
        {router_list.map((item, index) => {
          return <Route
            key={index}
            path={item.path}
            exact={item.exact}
            render={(routerProps) => {
              return item.render({ ...routerProps, ...props });
            }}
          />
        }
        )}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
}
export default RootRoutes;