import { useState } from "react";

type KepBetoltoProps = {
  kepUrl: string;
};

export function KepBetolto({ kepUrl }: KepBetoltoProps) {
  return (
    <img src={kepUrl} width="150"/>
  );
}


export function ReactKapcsolo() {
  const [beKapcsolva, setBeKapcsolva] = useState(false);

  const kikapcsoltKep ="https://www.w3schools.com/js/pic_bulboff.gif";

  const bekapcsoltKep ="https://www.w3schools.com/js/pic_bulbon.gif";

  return (
    <div>
      <h2>Izzo kapcsolo</h2>

      <button onClick={() => setBeKapcsolva(!beKapcsolva)}>
        {beKapcsolva ? "Be" : "Ki"}
      </button>

      <KepBetolto
        kepUrl={beKapcsolva ? bekapcsoltKep : kikapcsoltKep}
      />
    </div>
  );
}