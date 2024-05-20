import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QuestionGenerationAgentList } from "./questionGenerationAgent/QuestionGenerationAgentList";
import { QuestionGenerationAgentCreate } from "./questionGenerationAgent/QuestionGenerationAgentCreate";
import { QuestionGenerationAgentEdit } from "./questionGenerationAgent/QuestionGenerationAgentEdit";
import { QuestionGenerationAgentShow } from "./questionGenerationAgent/QuestionGenerationAgentShow";
import { TranscriptionAgentList } from "./transcriptionAgent/TranscriptionAgentList";
import { TranscriptionAgentCreate } from "./transcriptionAgent/TranscriptionAgentCreate";
import { TranscriptionAgentEdit } from "./transcriptionAgent/TranscriptionAgentEdit";
import { TranscriptionAgentShow } from "./transcriptionAgent/TranscriptionAgentShow";
import { ContextAnalysisAgentList } from "./contextAnalysisAgent/ContextAnalysisAgentList";
import { ContextAnalysisAgentCreate } from "./contextAnalysisAgent/ContextAnalysisAgentCreate";
import { ContextAnalysisAgentEdit } from "./contextAnalysisAgent/ContextAnalysisAgentEdit";
import { ContextAnalysisAgentShow } from "./contextAnalysisAgent/ContextAnalysisAgentShow";
import { GuidanceAgentList } from "./guidanceAgent/GuidanceAgentList";
import { GuidanceAgentCreate } from "./guidanceAgent/GuidanceAgentCreate";
import { GuidanceAgentEdit } from "./guidanceAgent/GuidanceAgentEdit";
import { GuidanceAgentShow } from "./guidanceAgent/GuidanceAgentShow";
import { SupervisoryAgentList } from "./supervisoryAgent/SupervisoryAgentList";
import { SupervisoryAgentCreate } from "./supervisoryAgent/SupervisoryAgentCreate";
import { SupervisoryAgentEdit } from "./supervisoryAgent/SupervisoryAgentEdit";
import { SupervisoryAgentShow } from "./supervisoryAgent/SupervisoryAgentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AIInterviewTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="QuestionGenerationAgent"
          list={QuestionGenerationAgentList}
          edit={QuestionGenerationAgentEdit}
          create={QuestionGenerationAgentCreate}
          show={QuestionGenerationAgentShow}
        />
        <Resource
          name="TranscriptionAgent"
          list={TranscriptionAgentList}
          edit={TranscriptionAgentEdit}
          create={TranscriptionAgentCreate}
          show={TranscriptionAgentShow}
        />
        <Resource
          name="ContextAnalysisAgent"
          list={ContextAnalysisAgentList}
          edit={ContextAnalysisAgentEdit}
          create={ContextAnalysisAgentCreate}
          show={ContextAnalysisAgentShow}
        />
        <Resource
          name="GuidanceAgent"
          list={GuidanceAgentList}
          edit={GuidanceAgentEdit}
          create={GuidanceAgentCreate}
          show={GuidanceAgentShow}
        />
        <Resource
          name="SupervisoryAgent"
          list={SupervisoryAgentList}
          edit={SupervisoryAgentEdit}
          create={SupervisoryAgentCreate}
          show={SupervisoryAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
