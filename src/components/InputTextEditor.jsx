import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";


export const InputTextEditor = () => {
  return (
    <React.Fragment>
      <GrammarlyEditorPlugin clientId="client_JWFq8pdwJeEqiNtTXy72DZ" config={{ documentDialect: "india" }}>
      <textarea name="text" id="mybox" cols="30" rows="10"></textarea>
        
</GrammarlyEditorPlugin>
    </React.Fragment>
  );
};
