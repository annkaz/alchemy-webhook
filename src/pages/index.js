import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [txData, setTxData] = useState([]);

  const getData = async () => {
    const data = await fetch("/api/blockData");
    const json = await data.json();
    setTxData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>Block data</div>
      <div>
        {txData.length ? (
          <table>
            <thead>
              <tr>
                <th>Tx hash</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              {txData.map((d) => {
                return (
                  <tr>
                    <td>{d?.transaction?.hash}</td>
                    <td>{d?.transaction?.from?.address}</td>
                    <td>{d?.transaction?.to?.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </main>
  );
}
