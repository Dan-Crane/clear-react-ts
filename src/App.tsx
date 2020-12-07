import React, { FC } from "react";

const a = 2;
const b = a;

export const App: FC = () => (
  <>
    <h1>{b}</h1>
  </>
);
