import React, { MouseEventHandler } from "react";
interface numero {
  numero: number;
}
export default function NButton(props: numero) {
  return <button>{props.numero}</button>;
}
