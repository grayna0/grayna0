import "./App.scss";
import { routesPage } from "./routes/routes";
import WrappedPage from "./layout/Layout";
import MyState from "./context/Context";

function App() {
  return (
    <MyState  >
      <WrappedPage>
        <>
        
          {routesPage.map((route, index) => {
            const Page = route.compoent;
            return (
              <div className="wapped" key={index} style={{ width: "100vw", height: "90vh" }}>
                <Page />
              </div>
            );
          })}
        </>
      </WrappedPage>
    </MyState>
  );
}

export default App;
